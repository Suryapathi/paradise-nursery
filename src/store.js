import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Components/CartSlice.jsx";

export default configureStore({
  reducer: { cart: cartReducer },
});
