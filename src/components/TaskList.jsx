import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/reducer';


const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks) //get task from redux store
    const dispatch = useDispatch();

    // handle task delete action by redux dispatch
    const handleDeleteTask = (index) => {
        dispatch(deleteTask(index));
    }
    // handle task edit action by redux dispatch
    const handleEditTask = (index) => {
        const newTask = prompt("Edit the task:", tasks[index]);
        if (newTask !== null) {
            dispatch(editTask({ index, newTask }));
        }
    };
    return (
        <div className='md:px-64 mx-auto py-5'>
            <ul className=''>
                {tasks.map((task, index) => (
                    <li className='flex flex-row justify-between px-2 py-4 shadow-xl my-2 cursor-pointer hover:shadow-lg border-2 hover:shadow-indigo-100 rounded-lg items-center' key={index}>
                        {task}
                        <div className='flex flex-row justify-between gap-4'>
                            <button className='' onClick={() => handleEditTask(index)}><CiEdit size={30} /></button>
                            <button className='' onClick={() => handleDeleteTask(index)}><MdDeleteSweep size={30} /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;