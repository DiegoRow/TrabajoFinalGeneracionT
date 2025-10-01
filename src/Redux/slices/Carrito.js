import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartShop",
    initialState: {
        cantidadItem: 0,
        listaItem: [

        ]
    },
    reducers: {
        agregarItem: (state, action) => {
            const {  } = action.payload
        }
    }
})


export default cartSlice