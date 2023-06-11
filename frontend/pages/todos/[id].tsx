import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { TodoDetail } from '../../features/todos/components/TodoDetail';
import st from '../../styles/sass/style.module.scss'

type TodoShowProps = {
  id: string;
}

const TodoShow: NextPage<TodoShowProps> = () => {
  const router = useRouter();

  return (
    <>
      <div className={st.show}>
        <h1 className={st.show_title}>ToDo詳細</h1>
        <TodoDetail {...{router}} />
      </div>
    </>
  );
};

export default TodoShow;
