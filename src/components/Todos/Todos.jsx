import { useEffect, useState } from 'react';
import UserTodos from './UserTodos';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

  if (todos.length === 0) {
    return null;
  }

  let allTodos = [];

  todos.forEach((todo) => {
    const matchingIndex = allTodos.findIndex(
      (todosByUser) => todosByUser[0].userId === todo.userId
    );

    if (matchingIndex !== -1) {
      allTodos[matchingIndex].push(todo);
    } else {
      allTodos.push([todo]);
    }
  });

  const arrangeTodosByUser = allTodos.sort((a, b) => a[0].userId - b[0].userId);

  return (
    <div>
      {arrangeTodosByUser.map((todoList, index) => (
        <UserTodos key={index} todos={todoList} />
      ))}
    </div>
  );
};

export default Todos;
