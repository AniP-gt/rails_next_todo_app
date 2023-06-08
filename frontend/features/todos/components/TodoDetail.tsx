import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { getDetailTodo } from '../../api';

interface TodoDetailProps {
  id: number;
  content: string;
}

export const TodoDetail = ({ id }: TodoDetailProps) => {
  const [todo, setTodo] = useState<TodoDetailProps[]>([]);
  const getDetail = async () => {
    const data = await getDetailTodo(id);
    setTodo(data);
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <>
      <ul className={st.list_ul}>
        <li key={todo.id}>{todo.content}</li>
      </ul>
    </>
  );
};
