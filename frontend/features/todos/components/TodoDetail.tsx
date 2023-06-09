import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { getDetailTodo } from '../../api';

type Props = {
  id: string;
};

type TodoDetailState = {
  id: number;
  title: string;
  content: string;
  priority: string;
  status: boolean;
  due_date: string;
};

export const TodoDetail = ({ id }: Props) => {
  const initialState = {
    id: 0,
    title: '',
    content: '',
    priority: '',
    status: false,
    due_date: '',
  }

  const [todo, setTodo] = useState<TodoDetailState>(initialState);

  const getDetail = useCallback(async () => {
    const data = await getDetailTodo(id);
    setTodo(data);
  }, [id]);

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  return (
    <>
      <ul
        key={todo.id}
        className={st.list_ul}
      >
        <li>{todo.title}</li>
        <li>{todo.content}</li>
        <li>{todo.priority}</li>
        <li>{todo.status}</li>
        <li>{todo.due_date}</li>
      </ul>
    </>
  );
};
