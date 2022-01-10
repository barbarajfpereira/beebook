import './UserTodos.scss';
import React, { useState } from 'react';
import Todo from './Todo';

import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.png';
import user6 from '../../assets/user6.png';
import user7 from '../../assets/user7.png';
import user8 from '../../assets/user8.png';
import user9 from '../../assets/user9.png';
import user10 from '../../assets/user10.png';

const avatars = {
  1: user1,
  2: user2,
  3: user3,
  4: user4,
  5: user5,
  6: user6,
  7: user7,
  8: user8,
  9: user9,
  10: user10,
};

const UserTodos = ({ todos, onAdd, onClear, onCompleted }) => {
  const [input, setInput] = useState([]);
  const userId = todos[0].userId;

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput('');
  };

  return (
    <div className='todos-user'>
      <img className='todos-user__avatar' src={avatars[userId]} alt='avatar' />

      <div className='todos-user__add'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmit(e);
            }
          }}
        />
        <button onClick={onSubmit}>Add</button>
      </div>

      <ul className='todos-user__list'>
        <strong>To do:</strong>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onCompleted={onCompleted} />
        ))}
      </ul>

      <button className='todos-user__clear' onClick={onClear}>
        Clear completed
      </button>
    </div>
  );
};

export default UserTodos;
