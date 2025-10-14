import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartShop",
    initialState: {
        listaItem: []
    },

    reducers: {
        agregarItem: (state, action) => {
            const nuevoItem = action.payload
            const mismoItem = state.listaItem.find((item) => item.id === nuevoItem.id)

            if (mismoItem) {
                if (mismoItem.cantidad < 10) {
                    mismoItem.cantidad += 1
                }
            } else {
                state.listaItem.push({ ...nuevoItem, cantidad: 1 })
            }

        },

        quitarItem: (state, action) => {
            const id = action.payload
            state.listaItem = state.listaItem.filter((item) => item.id !== id)
        },

        changeCantidad: (state, action) => {
            const { id, cantidad } = action.payload
            const yaExiste = state.listaItem.find((item) => item.id === id)

            if (yaExiste) {
                if (cantidad <= 0) {
                    state.listaItem = state.listaItem.filter((item) => item.id !== id)
                } else if (cantidad <= 10) {
                    yaExiste.cantidad = cantidad
                } else {
                    yaExiste.cantidad = 10
                }
            }
        },

        vaciarLista: (state, action) => {
            state.listaItem = []
        }
    }
})

export const { agregarItem, quitarItem, changeCantidad, vaciarLista } = cartSlice.actions
export default cartSlice.reducer