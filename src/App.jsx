import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {

  return (
    <div className='border-2 h-screen w-screen bg-gray-100 overflow-y-scroll'>
      <h1 className='text-center text-2xl md:text-4xl py-2 font-semibold'>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;