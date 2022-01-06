import './Todo.scss';
import React from 'react';

const Todo = ({ todo }) => {
  const { id, title, completed } = todo;

  return (
    <div className={completed ? 'strike' : ''}>{`Task ${id}: ${title}`}</div>
  );
};

export default Todo;
