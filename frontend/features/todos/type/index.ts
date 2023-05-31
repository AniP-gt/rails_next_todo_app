export type Todo = {
  id: number;
  title: string;
  content: string;
  status: boolean;
  priority: string;
  due_date: string;
};

export type TodoParams = {
  title: string;
  content: string;
  status: boolean;
  priority: string;
  due_date: string;
}
