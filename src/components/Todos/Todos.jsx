import UserTodos from './UserTodos';
import { useEffect, useState } from 'react';

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

  const addTodo = (input) => {
    setTodos([
      ...todos, //add in userId where input was made
      {
        // userId: todo.userId,
        id: todos.length + 1,
        title: input,
        completed: false,
      },
    ]);
  };

  const clearCompleted = () => {
    const remainingTodos = todos.filter((todo) => !todo.completed);
    setTodos(remainingTodos);
  };

  const onCompleted = (id) => {
    const toggleComplete = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
    setTodos(toggleComplete);
  };

  return (
    <div>
      {arrangeTodosByUser.map((todoList, index) => (
        <UserTodos
          key={index}
          todos={todoList}
          onAdd={addTodo}
          onClear={clearCompleted}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
};

export default Todos;
