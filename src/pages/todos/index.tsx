import { useGetTodosQuery } from "@/features/todo/todoApi";
import { Todo, TodosProps } from "@/types";
import { FC } from "react";

import { useRouter } from "next/router";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// const todoHead = [
//   {
//     id: "id",
//     label: "No",
//   },
//   {
//     id: "title",
//     label: "Title",
//   },
//   {
//     id: "completed",
//     label: "Completed",
//   },
//   {
//     id: "UserId",
//     label: "By",
//   },
// ];

const Todos: FC<TodosProps> = (
  {
    // todos,
    // requestId: reqSSR,
    // fulfilledTime: fulSSR,
  }
) => {
  const router = useRouter();

  const {
    data,
    isLoading,
    // error,
    // fulfilledTimeStamp: fulCSR,
    // requestId: reqCSR,
  } = useGetTodosQuery(
    {},
    {
      skip: router.isFallback,
    }
  );

  // console.log(`Render Check`, {
  //   fulMatched: fulSSR === fulCSR,
  //   reqMatched: reqSSR === reqCSR,
  // });

  if (isLoading || router.isFallback) return <div>Loading...</div>;

  return (
    <div className="min-h-screen px-6 md:px-12 py-8">
      <h1>Todo List</h1>

      <Table>
        <TableCaption>Todo List with Client Side Rendering</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>By</TableHead>
            <TableHead className="text-right">Completed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.userId}</TableCell>
              <TableCell className="text-right">{todo.completed}</TableCell>
            </TableRow>
          ))}
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Todos;
