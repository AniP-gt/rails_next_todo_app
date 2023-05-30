import React, { useEffect, useState } from 'react';
import { getTodos } from '../api';

interface Todo {
  id: number;
  title: string;
  content: string;
  priority: string;
  due_date: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getList = async () => {
      const data = await getTodos();
      setTodos(data);
    };

    getList();
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.title}</li>
          <li>{todo.content}</li>
          <li>{todo.priority}</li>
          <li>{todo.due_date}</li>
        </ul>
      ))}
    </>
  );
};
