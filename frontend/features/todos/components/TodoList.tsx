import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { getListTodos, deleteTodo } from '../../api/todoApi';

type Todo = {
  id: number;
  title: string;
  status: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getList = async () => {
    const data = await getListTodos();
    setTodos(data);
  };

  const destroyTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      await getList();
    } catch (error) {
      console.log(error);
    }
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
          <button
            onClick={() => destroyTodo(todo.id)}
            className={st.list_delete}
          >
              削除
          </button>
        </ul>
      ))}
    </>
  );
};
