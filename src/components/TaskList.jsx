import React from 'react';

const TaskList = ({ tasks, deleteTask, editTask }) => {
    return (
        <div className='px-64 mx-auto my-5'>
            <ul className='list-none'>
                {tasks.map((task, index) => (
                    <li className='mx-3' key={index}>
                        {task}
                        <button className='ml-3' onClick={() => editTask(index)}>Edit</button>
                        <button className='ml-3' onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;