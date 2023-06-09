import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { getListTodos } from '../../api/index';

type Todo = {
  title: string;
  status: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getList = async () => {
    const data = await getListTodos();
    setTodos(data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <ul
          key={todo.id}
          className={st.list_ul}
        >
          <Link
            href={`/todos/${todo.id}`}
            passHref
          >
            {todo.title}
          </Link>
        </ul>
      ))}
    </>
  );
};
