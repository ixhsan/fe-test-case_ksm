export interface Params {
  [key: string]: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosProps {
  todos: Todo[];
  requestId?: string;
  fulfilledTime?: number;
}
