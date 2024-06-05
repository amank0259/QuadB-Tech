import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";


const TaskList = ({ tasks, deleteTask, editTask }) => {
    return (
        <div className='md:px-64 mx-auto py-5'>
            <ul className=''>
                {tasks.map((task, index) => (
                    <li className='flex flex-row justify-between px-2 py-4 shadow-xl my-2 rounded-lg items-center' key={index}>
                        {task}
                        <div className='flex flex-row justify-between gap-4'>
                            <button className='' onClick={() => editTask(index)}><CiEdit size={30} /></button>
                            <button className='' onClick={() => deleteTask(index)}><MdDeleteSweep size={30} /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;