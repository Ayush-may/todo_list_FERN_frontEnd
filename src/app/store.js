import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice';
import colorReducer from '../features/colors/colorSlice';
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

const rootReducer = combineReducers({
    color: colorReducer,
    todo: todoReducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistReducers
});

const persistor = persistStore(store);

export { persistor, store };