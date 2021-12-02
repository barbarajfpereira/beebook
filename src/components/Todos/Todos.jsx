import { useState } from 'react';

const Todos = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (!value) {
      return null;
    }
    setTodos([...todos, value]);
    setValue('');
  };

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAdd();
            }
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </div>
    </div>
  );
};

export default Todos;
