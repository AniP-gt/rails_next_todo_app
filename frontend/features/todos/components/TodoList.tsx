import React, { useEffect, useState } from 'react';
import st from '../../../styles/sass/style.module.scss';
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
        <ul
          key={todo.id}
          className={st.list_ul}
        >
          <li>{todo.content}</li>
        </ul>
      ))}
    </>
  );
};
