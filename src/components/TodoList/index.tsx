import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Todo } from "@/types";
import { FC } from "react";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }: TodoListProps) => {
  if (!todos.length) return <h1 className="text-xl">No Data</h1>;

  return (
    <Table className="mb-4">
      <TableCaption>Todo List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>By</TableHead>
          <TableHead className="text-right">Completed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos?.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>{todo.userId}</TableCell>
            <TableCell
              className={`text-right${
                todo.completed ? " bg-lime-100" : ` bg-rose-100`
              }`}
            >
              {todo.completed ? "Complete" : "Not yet"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoList;
