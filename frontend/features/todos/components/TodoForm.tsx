import { useState, ChangeEvent, FormEvent } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { postTodo } from '../../api/index';

type TodoParams = {
  title: string;
  content: string;
  priority: string;
  due_date: string;
};

export const TodoForm: React.FC = () => {
  const [todo, setTodo] = useState<TodoParams>({
    title: '',
    content: '',
    priority: 'medium',
    due_date: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postTodo(todo);
    setTodo({
      title: '',
      content: '',
      priority: 'medium',
      due_date: '',
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={st.todoForm}
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
        onChange={handleChange}
      >
        <option value='high'>高</option>
        <option value='medium'>中</option>
        <option value='low'>低</option>
      </select>
      <p>期日</p>
      <input
        type='date'
        name='due_date'
        value={todo.due_date}
        onChange={handleChange}
        className={st.inputText}
      />

      <button
        type='submit'
        className={st.todoButton}
      >
        Add Todo
      </button>
    </form>
  );
};
