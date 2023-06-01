import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { getDetailTodo } from '../api';

interface TodoDetailProps {
  id: number;
  title: string;
  content: string;
  priority: string;
  due_date: string;
}

export const TodoDetail = ({ id }: TodoDetailProps) => {
  const [todo, setTodo] = useState<TodoDetailProps[]>([]);

  useEffect(() => {
    const getDetail = async () => {
      const data = await getDetailTodo(id);
      setTodo(data);
    };

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
