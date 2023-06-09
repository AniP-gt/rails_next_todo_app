import { baseApi } from './baseApi';
import { GetTodo, PostTodo } from './types';

export const getListTodos = async (): Promise<GetTodo> => {
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
  baseApi
    .post('todos', params)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
