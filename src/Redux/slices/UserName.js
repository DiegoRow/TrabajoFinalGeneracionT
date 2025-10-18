import { createSlice } from "@reduxjs/toolkit";

const UserName = createSlice({
    name: "NombreUsuario",
    initialState: {
        text: "Iniciar Sesión",
    },
    reducers: {
        changeUserName: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { changeUserName } = UserName.actions;
export default UserName.reducer