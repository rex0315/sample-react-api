import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = ({ value: {userName: ""} } )
const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserName(state, action) {
            state.value = action.payload;
        }
    }

});
export const { getUserName } = slice.actions;
export const store = configureStore({
    reducer: {
     user: slice.reducer,
 },
})  

