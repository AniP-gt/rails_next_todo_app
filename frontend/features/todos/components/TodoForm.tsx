import { useState, ChangeEvent, FormEvent } from 'react';
import st from '../../../styles/sass/style.module.scss';
import { postTodo } from '../api/index';
import { Todo } from '../type';

export const TodoForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params: Todo = {
      content: content,
    };
    postTodo({ params });
    setContent('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={st.todoForm}
    >
      <input
        type='text'
        value={content}
        onChange={handleChange}
        className={st.inputText}
      />
      <button
        type='submit'
        className={st.todoButton}
        onClick={() => handleSubmit}
      >
        Add Todo
      </button>
    </form>
  );
};
