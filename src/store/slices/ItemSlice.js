import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "itemSlice",
  initialState: { allItems: [], totalPrice: 0, showCart: false },
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
        total: action.payload.price,
      };

      const existingItem = state.allItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        state.allItems.filter((item) => {
          if (item.id === newItem.id) {
            item.quantity++;
            item.total += item.price;
          }
        });
      } else {
        state.allItems.push(newItem);
      }
      state.totalPrice += newItem.price;
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      const existingItem = state.allItems.find((item) => item.id === itemID);

      if (existingItem.quantity > 1) {
        state.allItems.map((item) => {
          if (item.id === itemID) {
            item.quantity--;
            item.total -= item.price;
          }
        });
      } else {
        state.allItems = state.allItems.filter((item) => item.id !== itemID);
      }
      state.totalPrice -= existingItem.price;
    },
    toggleShowCart: (state, action) => {
      state.showCart = !state.showCart;
    },
  },
});

export const ItemActions = ItemSlice.actions;
export default ItemSlice;
