import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { TodoDetail } from '../../features/todos/components/TodoDetail';

interface TodoShowProps {
  id: number;
}

const TodoShow: NextPage<TodoShowProps> = ({ id }) => {
  const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <div>Show Page</div>
      <TodoDetail id={id} />
    </>
  );
};

export default TodoShow;
