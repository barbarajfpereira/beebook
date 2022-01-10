import React from 'react';

const Todo = ({ todo, onCompleted }) => {
  const { id, title, completed } = todo;

  return (
    <div
      className={completed ? 'todos-user__list--strike' : ''}
      onClick={() => onCompleted(id)}
    >
      {`Task ${id}: ${title}`}
    </div>
  );
};

export default Todo;
