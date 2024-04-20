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
  title?: string;
  mode: "csr" | "ssr" | "isr";
  todos: Todo[];
  requestId?: string;
  fulfilledTime?: number;
  updatedAt?: number;
}
