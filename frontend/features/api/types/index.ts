export type GetTodos = {
  title: string;
  status: boolean;
};

export type GetTodo = {
  id: number;
  title: string;
  content: string;
  status: boolean;
  priority: string;
  due_date: string;
};

export type PostTodo = {
  title: string;
  content: string;
  priority: string;
  due_date: string;
};

export type PutTodo = {
  id: number;
  title: string;
  content: string;
  status: boolean;
  priority: string;
  due_date: string;
};
