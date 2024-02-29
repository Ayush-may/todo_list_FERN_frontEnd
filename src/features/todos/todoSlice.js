import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ text: "heyyyyyyy" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => { }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;