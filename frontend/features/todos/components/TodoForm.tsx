import { useState, ChangeEvent, FormEvent } from 'react';
import st from '../../../styles/sass/style.module.scss';

export const TodoForm = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodo('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={st.todoForm}
    >
      <input
        type='text'
        value={todo}
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
