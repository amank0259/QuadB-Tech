import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // fuction to add the tasks and pass it to add Task component
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // function to delete the task to pass into the Tasklist component
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // function to edit the task to pass into the Tasklist component
  const editTask = (index) => {
    const newTask = prompt("Edit the task:", tasks[index]);
    if (newTask !== null) {
      const newTasks = tasks.map((task, i) => (i === index ? newTask : task));
      setTasks(newTasks);
    }
  };

  return (
    <div className='border-2 h-screen w-screen bg-gray-100 overflow-y-scroll'>
      <h1 className='text-center text-2xl md:text-4xl py-2 font-semibold'>To-Do List</h1>
      <TaskInput addTask={addTask} />           {/* add task input component and pass the action(add tasks)*/}
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />            {/* add task list component and pass the actions(edit, delete tasks)*/}
    </div>
  );
};

export default App;