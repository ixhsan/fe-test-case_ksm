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
import { Skeleton } from "@/components/ui/skeleton";

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

  if (isLoading || router.isFallback)
    return <Skeleton className="min-w-[100px] min-h-[20px] rounded-full" />;

  return (
    <div className=" px-6 md:px-12 py-8 border-2">
      <h1>Todo List with Client-Side Rendering</h1>

      <Table>
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
          {data?.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.userId}</TableCell>
              <TableCell
                className={`text-right${
                  todo.completed ? " bg-lime-400" : ` bg-rose-300`
                }`}
              >
                {todo.completed ? "Complete" : "Not yet"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Todos;
