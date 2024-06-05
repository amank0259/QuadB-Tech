import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducer';

const store = configureStore({
    reducer: {
        tasks: taskReducer, // reducer to handle tasks slice
    },
});

export default store;