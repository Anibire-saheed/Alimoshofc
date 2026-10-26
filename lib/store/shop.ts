import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export type CartItem = { id: string; size: string; quantity: number };
const shopSlice = createSlice({
  name: "shop",
  initialState: { items: [] as CartItem[] },
  reducers: {
    addToCart(state, action: PayloadAction<{ id: string; size: string }>) {
      const item = state.items.find(
        (i) => i.id === action.payload.id && i.size === action.payload.size,
      );
      if (item) {
        item.quantity = Math.min(item.quantity + 1, 10);
      } else state.items.push({ ...action.payload, quantity: 1 });
    },
    setQuantity(state, action: PayloadAction<CartItem>) {
      const item = state.items.find(
        (i) => i.id === action.payload.id && i.size === action.payload.size,
      );
      if (item)
        item.quantity = Math.max(1, Math.min(10, action.payload.quantity));
    },
    removeFromCart(state, action: PayloadAction<{ id: string; size: string }>) {
      state.items = state.items.filter(
        (i) => i.id !== action.payload.id || i.size !== action.payload.size,
      );
    },
  },
});
export const { addToCart, setQuantity, removeFromCart } = shopSlice.actions;
export default shopSlice.reducer;
