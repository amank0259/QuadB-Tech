import { createSlice } from '@reduxjs/toolkit';

// define the initial state for task list
const initialState = {
    tasks: [],
};

// define slice for action and reducer to add delete and edit the tasks.
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // handle the add task
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        // handle the delete task
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((_, index) => index !== action.payload);
        },
        // handle edit task
        editTask: (state, action) => {
            const { index, newTask } = action.payload;
            state.tasks[index] = newTask;
        },
    },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
