// src/redux/reducer.js
import { createSlice } from '@reduxjs/toolkit';

// function to save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// function to load tasks from local storage
const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

// define the initial state for task list
const initialState = {
    tasks: loadTasksFromLocalStorage(),
};

// define slice for action and reducer to add delete and edit the tasks.
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // handle the add task
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            saveTasksToLocalStorage(state.tasks);
        },
        // handle the delete task
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((_, index) => index !== action.payload);
            saveTasksToLocalStorage(state.tasks);
        },
        // handle edit task
        editTask: (state, action) => {
            const { index, newTask } = action.payload;
            state.tasks[index] = newTask;
            saveTasksToLocalStorage(state.tasks);
        },
    },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
