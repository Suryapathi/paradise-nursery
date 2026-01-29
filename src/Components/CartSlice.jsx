import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const exists = state.cartItems.find((x) => x.id === item.id);
            if (!exists) state.cartItems.push({ ...item, quantity: 1 });
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
        },
        increaseQty: (state, action) => {
            const it = state.cartItems.find((x) => x.id === action.payload);
            if (it) it.quantity += 1;
        },
        decreaseQty: (state, action) => {
            const it = state.cartItems.find((x) => x.id === action.payload);
            if (it && it.quantity > 1) it.quantity -= 1;
        },
    },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
