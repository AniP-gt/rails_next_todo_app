import { NextRouter } from 'next/router';
import React, { useEffect, useState, useCallback, ChangeEvent, FormEvent } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { getDetailTodo, putTodo } from '../../api/todoApi';

type Props = {
  router: NextRouter;
};

type TodoDetailState = {
  id: number;
  title: string;
  content: string;
  priority: string;
  status: string;
  due_date: string;
};

export const TodoDetail = ({ router }: Props) => {
  const [todo, setTodo] = useState<TodoDetailState>({
    id: 0,
    title: '',
    content: '',
    priority: '',
    status: '',
    due_date: '',
  });

  const id = router.query.id;

  const getDetail = useCallback(async () => {
    const data = await getDetailTodo(id);
    const convertedData = {
      ...data,
      status: data.status.toString(),
    };
    setTodo(convertedData);
  }, [id]);

  const updateTodo = async (params: TodoDetailState) => {
    try {
      await putTodo(params);
      await getDetail();
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const handleStatusChange = (isChecked: boolean) => {
    const convert_string = isChecked ? 'true' : 'false';
    setTodo((prevTodo) => ({
      ...prevTodo,
      status: convert_string,
    }));
  };


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await updateTodo(todo);
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
      <form
        onSubmit={handleSubmit}
        className={st.todoForm}
      >
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
              value={todo.status ? todo.status.toString() : ''} // 条件分岐で値を判定し、undefinedの場合は空文字列を設定
              className={st.inputText}
              onChange={(e) => handleStatusChange(e.target.value === 'true' ? true : false)}
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
        <button
          type='submit'
          className={st.todoButton}
        >
          Add Todo
        </button>
      </form>
    </>
  );
};
