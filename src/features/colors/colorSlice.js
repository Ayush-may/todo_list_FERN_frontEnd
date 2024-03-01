import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    colors: ["#DCFFB7", "#FFBB64", "#FFEAA7","#D9EDBF","#D4E7C5","#92C7CF","#88AB8E"]
}

export const colorSlice = createSlice({
    name: "ayush",
    initialState: initialState,
    reducers: {
        getColor: (state, action) => { }
    }
});

export const { getColor } = colorSlice.actions;
export default colorSlice.reducer; 