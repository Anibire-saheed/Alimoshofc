import shopReducer from "./shop";
import predictionsReducer from "./predictions";
import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
const clubSlice = createSlice({
  name: "club",
  initialState: {
    menuOpen: false,
    lastEnquiry: null as null | {
      name: string;
      email: string;
      message: string;
    },
  },
  reducers: {
    setMenuOpen(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
    saveEnquiry(
      state,
      action: PayloadAction<{ name: string; email: string; message: string }>,
    ) {
      state.lastEnquiry = action.payload;
    },
  },
});
export const { setMenuOpen, saveEnquiry } = clubSlice.actions;
export const makeStore = () =>
  configureStore({
    reducer: {
      club: clubSlice.reducer,
      shop: shopReducer,
      predictions: predictionsReducer,
    },
  });
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
