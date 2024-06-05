import React, { useState } from 'react';

const TaskInput = () => {
    const [task, setTask] = useState('');

    // function to handle the input and set the task item
    const handleInputChange = (e) => {
        e.preventDefault();
        setTask(e.target.value);
    };

    // function to add the task 
    const handleAddTask = () => {
        if (task.trim()) {
            addTask(task);
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
        <div className='px-64 mx-auto py-5'>
            <input
                type="text"
                value={task}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Add a new task"
            />
            <button className='bg-indigo-400' onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
