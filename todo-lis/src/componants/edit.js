import React, { useState, useEffect } from 'react';

function Edit({ editTodo, task }) { // Destructure 'createTodeo' from props
  const [input, setInput] = useState("task.task");

  useEffect(() => {
    setInput(task.task); // Update input if task changes
  }, [task]);
  const eventHandler = (e) => {
    e.preventDefault();
    editTodo(input, task.id); // Call the function
    setInput(""); // Clear the input field after submission
  };

  const onChangeEvent = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className='flex bg-neutral-light justify-center ml-10 p-5 w-[50%]' onSubmit={eventHandler}>
      <input
        type="text"
        placeholder='Update task'
        className='outline-none px-2 py-1 w-[70%] rounded'
        onChange={onChangeEvent}
        value={input}
        
      />
      <input
        type="submit"
        value="Update Task"
        className='bg-primary/40  px-1'
      />
    </form>
  );
}

export default Edit;
