import { baseApi } from '../../../config/baseApi';

type Todo = {
  id: number;
  title: string;
  content: string;
  status: boolean;
  priority: string;
  due_date: string;
};

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await baseApi.get('todos');
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
