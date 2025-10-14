import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "buscador",
    initialState: {
        text: "",
    },
    reducers: {
        textoPuesto: (state, action) => {
            state.text = action.payload;
        },
        limpiarTexto: (state) => {
            state.text = "";
        },
    },
})

export const { textoPuesto, limpiarTexto } = SearchSlice.actions;
export default SearchSlice.reducer;