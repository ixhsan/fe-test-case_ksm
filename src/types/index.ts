export interface Params {
  _start?: number;
  _limit?: number;
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
