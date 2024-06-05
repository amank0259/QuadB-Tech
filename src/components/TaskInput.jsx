import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/reducer';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    // function to handle the input and set the task item
    const handleInputChange = (e) => {
        e.preventDefault();
        setTask(e.target.value);
    };

    // function to add the task 
    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task)); {/*dispatch the action(add task) */ }
            setTask('');
        }
    };

    // function for press enter key to add the task
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    }
    return (
        <div className='md:px-64 mx-auto py-5 flex items-center justify-between'>
            <input
                type="text"
                value={task}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Add a new task"
                className='w-[70%] md:ml-10 ml-2 h-10 text-lg md:text-2xl px-2 border-2 border-gray-500 rounded'
            />
            <button className='bg-indigo-400 md:mr-10 mr-2 px-3 py-3 md:px-5 md:py-5 rounded-full' onClick={handleAddTask}>< FaPlus /></button>
        </div>
    );
};

export default TaskInput;
