import { useEffect, useState } from 'react';
import TodoGroup from './TodoGroup';

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

  let todoGroups = [];

  todos.forEach((todo) => {
    const matchingIndex = todoGroups.findIndex(
      (todoGroup) => todoGroup[0].userId === todo.userId
    );

    if (matchingIndex !== -1) {
      todoGroups[matchingIndex].push(todo);
    } else {
      todoGroups.push([todo]);
    }
  });

  const sortedTodoGroups = todoGroups.sort((a, b) => a[0].userId - b[0].userId);
  return (
    <div>
      {sortedTodoGroups.map((todoGroup, index) => (
        <TodoGroup key={index} todoGroup={todoGroup} />
      ))}
    </div>
  );
};

export default Todos;
