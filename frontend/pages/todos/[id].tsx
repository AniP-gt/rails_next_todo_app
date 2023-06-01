import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { TodoDetail } from '../../features/todos/components/TodoDetail';

interface TodoShowProps {
  id: number;
}

const TodoShow: NextPage<TodoShowProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  const numericId = parseInt(id as string, 10);

  return (
    <>
      <div>Show Page</div>
      <TodoDetail id={numericId} />
    </>
  );
};

export default TodoShow;
