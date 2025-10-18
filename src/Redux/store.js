import { configureStore } from "@reduxjs/toolkit";
// reducers
import cartSlice from "./slices/Carrito.js"
import SearchSlice from "./slices/Buscador.js"
import Username from "./slices/UserName.js"

export default configureStore({
    reducer: {
        cartShop: cartSlice,
        buscador: SearchSlice,
        NombreUsuario: Username
    }
})