import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUserUID: '',
    todos: [],
    searchQueryText: ''
}

const addTodoToFirebaseDasebaseOfCurrentUser = async (todo) => {
    const UID = localStorage.getItem('uId');
    const data = await axios({
        url: '/add_todo',
        method: 'POST',
        data: { todo, UID }
    });
}

export const fetchTodoFromCurrentUser = createAsyncThunk('todo/fetchTodoFromCurrentUser', async () => {
    const UID = localStorage.getItem('uId');
    const response = await axios({
        url: `/user/todos/${UID}`,
        method: "GET",
        data: { UID }
    })

    return response.data;
})

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        setCurrentUserUID: (state, action) => {
            const UID = action.payload.UID;
            state.currentUserUID = UID + '';
        },
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload, time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString() };
            addTodoToFirebaseDasebaseOfCurrentUser(todo, state.currentUserUID);
            state.todos.unshift(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(element => element.id != action.payload)
        },
        searchQuery: (state, action) => {
            state.searchQueryText = action.payload;
        },
        addTodoFromAPI: (state, action) => {
            action.payload.map(todo => state.todos.unshift(todo))
        },
        resetTodoState: (state, action) => {
            state.currentUserUID = '';
            state.todos = [];
            state.searchQueryText = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodoFromCurrentUser.pending, (state, action) => {
            console.log('pending');
        })
        builder.addCase(fetchTodoFromCurrentUser.fulfilled, (state, action) => {
            
        })
        builder.addCase(fetchTodoFromCurrentUser.rejected, (state, action) => {
            console.log('rejected');
        })
    }
});


export const selectedSearchQuery = state => {
    return state.todo.todos.filter(todo => todo.text.toLowerCase().includes(state.todo.searchQueryText.toLowerCase()))
}

export const { addTodo, removeTodo, searchQuery, setCurrentUserUID, resetTodoState } = todoSlice.actions;
export default todoSlice.reducer;