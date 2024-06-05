import React, { useState } from 'react';
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

const App = () => {

  return (
    <div>
      <h1 className='text-center text-2xl md:text-4xl py-2 font-semibold'>To-Do List</h1>
      <TaskInput />           {/* add task input component */}
      <TaskList />            {/* add task list component */}
    </div>
  );
};

export default App;