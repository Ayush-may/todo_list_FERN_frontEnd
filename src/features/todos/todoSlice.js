import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload , time : new Date().toLocaleTimeString(), date : new Date().toLocaleDateString()};
            state.todos.unshift(todo);
        },
        removeTodo: (state, action) => { }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;