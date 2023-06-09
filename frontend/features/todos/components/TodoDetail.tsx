import { NextRouter } from 'next/router';
import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { getDetailTodo } from '../../api';

type Props = {
  router: NextRouter;
};

type TodoDetailState = {
  id: number;
  title: string;
  content: string;
  priority: string;
  status: boolean;
  due_date: string;
};

export const TodoDetail = ({ router }: Props) => {
  const initialState = {
    id: 0,
    title: '',
    content: '',
    priority: '',
    status: false,
    due_date: '',
  };

  const [todo, setTodo] = useState<TodoDetailState>(initialState);
  const [params, setParams] = useState<TodoDetailState>(initialState);
  const id: any = router.query.id;

  const getDetail = useCallback(async () => {
    const data = await getDetailTodo(id);
    setTodo(data);
  }, [id]);

  const handleStatusChange = (isChecked: boolean) => {
    setParams((prevTodo) => ({
      ...prevTodo,
      status: isChecked,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParams((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  useEffect(() => {
    // @note
    //  routerの準備ができないうち(つまり無条件にundefinedを出す時)は、returnを返して、
    //  undefined状態で処理が進まないようにします
    if (!router.isReady) return;

    getDetail();
  }, [router.isReady, getDetail]);

  return (
    <>
      <ul
        key={todo.id}
        className={st.show_ul}
      >
        <p>Todo</p>
        <input
          type='text'
          name='title'
          value={todo.title}
          onChange={handleChange}
          className={st.inputText}
        />
        <p>詳細</p>
        <input
          type='text'
          name='content'
          value={todo.content}
          onChange={handleChange}
          className={st.inputText}
        />
        <p>優先度</p>
        <select
          name='priority'
          value={todo.priority}
          className={st.inputText}
          onChange={handleChange}
        >
          <option value='high'>高</option>
          <option value='medium'>中</option>
          <option value='low'>低</option>
        </select>
        <li>
          <p>ステータス</p>
          <select
            name='status'
            value={todo.status.toString()} // todo.status を文字列に変換して value として設定
            className={st.inputText}
            onChange={(e) => handleStatusChange(e.target.value === 'true')} // 選択された値を真偽値に変換して処理
          >
            <option value='true'>完了</option>
            <option value='false'>未完</option>
          </select>
        </li>
        <p>期日</p>
        <input
          type='date'
          name='due_date'
          value={todo.due_date}
          onChange={handleChange}
          className={st.inputText}
        />
      </ul>
    </>
  );
};
