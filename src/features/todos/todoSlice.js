import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    searchQueryText: ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload, time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString() };
            state.todos.unshift(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(element => element.id != action.payload)
        },
        searchQuery: (state, action) => {
            state.searchQueryText = action.payload;
        }
    }
});

export const selectedSearchQuery = state => {
    return state.todo.todos.filter(todo => todo.text.toLowerCase().includes(state.todo.searchQueryText.toLowerCase()))
}

export const { addTodo, removeTodo, searchQuery } = todoSlice.actions;
export default todoSlice.reducer;