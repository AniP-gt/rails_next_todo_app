import { baseApi } from './baseApi';
import { GetTodos, GetTodo, PostTodo, PutTodo } from './types';

export const getListTodos = async (): Promise<GetTodos> => {
  try {
    const response = await baseApi.get('todos');
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const getDetailTodo = async (id: string): Promise<GetTodo> => {
  try {
    const response = await baseApi.get(`todos/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const postTodo = (params: PostTodo) => {
  try {
    baseApi
      .post('todos', params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const putTodo = (params: PutTodo) => {
  const { id, title, content, priority, status, due_date } = params;
  const updatedParams = {
    id,
    title,
    content,
    priority,
    status,
    due_date,
  };

  try {
    baseApi
      .put(`todos/${id}`, updatedParams)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        throw err; // エラーを再スローして呼び出し元で処理できるようにする
      });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const res = await baseApi.delete(`todos/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
