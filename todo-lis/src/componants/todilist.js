import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './todo';
import Form1 from './form';
import Edit from './edit';


function Todolist() {
  const [todoValue, setTodo] = useState([]);

  const createTodeo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  const deleteTask = (id) => {
    setTodo(todoValue.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodo(todoValue.map(todo=>todo.id===id? {...todo, isEditing:! todo.isEditing} : todo  ))
  };
  const editTask = (task, id) => {
    setTodo(todoValue.map(todo =>
      todo.id === id ? { ...todo, task, isEditing: false } : todo
    ));
  };
  
  return (
    <div className='container'>
    <Form1 createTodeo={createTodeo} />
    {todoValue.map((todo) => (
      todo.isEditing ? (
        <Edit editTodo={editTask} task={todo} key={todo.id} />
      ) : (
        <Todo task={todo} key={todo.id} editTodo={editTodo} deleteTask={deleteTask} />
      )
    ))}
  </div>
  );
}

export default Todolist;
