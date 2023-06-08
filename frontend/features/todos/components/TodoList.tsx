import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { getListTodos } from '../../api/index';

type Todo = {
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
      const data = await getListTodos();
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
          <Link href={`/todos/${todo.id}`} passHref>{todo.title}</Link>
        </ul>
      ))}
    </>
  );
};
