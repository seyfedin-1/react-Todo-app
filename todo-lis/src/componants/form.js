import React, { useState } from 'react';

function Form1({ createTodeo }) { // Destructure 'createTodeo' from props
  const [input, setInput] = useState("");

  const eventHandler = (e) => {
    e.preventDefault();
    createTodeo(input); // Call the function
    setInput(""); // Clear the input field after submission
  };

  const onChangeEvent = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className='flex bg-neutral-light justify-center ml-10 p-5 w-[50%]' onSubmit={eventHandler}>
      <input
        type="text"
        placeholder='What Task do you have today?'
        className='outline-none px-2 py-1 w-[70%] rounded'
        onChange={onChangeEvent}
        value={input}
        
      />
      <input
        type="submit"
        value="Add Task"
        className='bg-primary/40  px-1'
      />
    </form>
  );
}

export default Form1;
