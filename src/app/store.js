import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice';
import colorReducer from '../features/colors/colorSlice';

export const store = configureStore({
    reducer: {
        color: colorReducer,
        todo: todoReducer
    }
});