import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

function Todo({ task, deleteTask , editTodo }) {
  return (
    <div className='flex justify-between items-center bg-neutral-dark text-[#ffffff] mx-10 w-[50%]'>
      <p className='border-b-2 border-primary w-full px-3 py-1 h-[28px] rounded bg-tertiary/20'>{task.task}</p>
      <div className="border-b-2 border-primary h-[28px] flex items-center gap-3 py-1 bg-accent-light/55">
        <AiFillEdit className='text-xl' 
         onClick={() => editTodo(task.id)}  />
        <MdDelete 
          className='text-xl ' 
          onClick={() => deleteTask(task.id)} // Ensure deleteTask is used correctly
        />
      </div>
    </div>
  );
}

export default Todo;
