import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers';

const store = configureStore({
    reducer: {
        tasks: taskReducer, // reducer to handle tasks slice
    },
});

export default store;