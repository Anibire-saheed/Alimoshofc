import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export type Prediction = { match: string; home: number; away: number };
const slice = createSlice({
  name: "predictions",
  initialState: { entries: [] as Prediction[] },
  reducers: {
    savePrediction(state, action: PayloadAction<Prediction>) {
      const i = state.entries.findIndex(
        (p) => p.match === action.payload.match,
      );
      if (i < 0) state.entries.push(action.payload);
      else state.entries[i] = action.payload;
    },
  },
});
export const { savePrediction } = slice.actions;
export default slice.reducer;
