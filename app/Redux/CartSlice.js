"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQty: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      
      state.totalQty = state.items.reduce((acc, i) => acc + i.qty, 0);
      state.totalAmount = state.items.reduce((acc, i) => acc + i.qty * i.price, 0);
    },

    increaseQty(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.qty += 1;

      
      state.totalQty = state.items.reduce((acc, i) => acc + i.qty, 0);
      state.totalAmount = state.items.reduce((acc, i) => acc + i.qty * i.price, 0);
    },

    decreaseQty(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return;

      if (item.qty === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        item.qty -= 1;
      }

      
      state.totalQty = state.items.reduce((acc, i) => acc + i.qty, 0);
      state.totalAmount = state.items.reduce((acc, i) => acc + i.qty * i.price, 0);
    },

    removeProduct(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);

      
      state.totalQty = state.items.reduce((acc, i) => acc + i.qty, 0);
      state.totalAmount = state.items.reduce((acc, i) => acc + i.qty * i.price, 0);
    },

    clearCart(state) {
      state.items = [];
      state.totalQty = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
