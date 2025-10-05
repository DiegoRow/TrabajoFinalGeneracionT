import { configureStore } from "@reduxjs/toolkit";
// reducers
import cartSlice from "./slices/Carrito.js"

export default configureStore({
    reducer: {
        cartShop: cartSlice
    }
})