import { baseApi } from '../../../config/baseApi';
import { Todo } from '../type';

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await baseApi.get('todos');
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const postTodo = (params: Todo) => {
  baseApi.post('todos', params).then(res => {
    console.log(res)
  }).catch(err => {
    console.error(err);
  })
}
