import { useGetTodosQuery } from "@/features/todo/todoApi";
import { Params, Todo, TodosProps } from "@/types";
import { FC, useState } from "react";

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
import PaginationMenu from "@/components/PaginationMenu";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import TodoList from "@/components/TodoList";
import SelectPageSize from "@/components/SelectPageSize";
import { TodoForm } from "@/components/TodoForm";
import TodoDialog from "@/components/TodoDialog";

const Todos: FC<TodosProps> = ({
  todos,
  requestId: reqSSR,
  fulfilledTime: fulSSR,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const _start =
    router.query._start && typeof router.query._start === "string"
      ? router.query._start
      : "0";
  const _limit =
    router.query._limit && typeof router.query._limit === "string"
      ? router.query._limit
      : "10";

  const {
    data,
    isLoading,
    fulfilledTimeStamp: fulCSR,
    requestId: reqCSR,
  } = useGetTodosQuery(
    {
      _start,
      _limit,
    },
    {
      skip: router.isFallback,
    }
  );

  console.log(`Rendering-Side Check`, {
    fulMatched: fulSSR === fulCSR,
    reqMatched: reqSSR === reqCSR,
  });

  if (isLoading || router.isFallback)
    return <Skeleton className="min-w-[100px] min-h-[20px] rounded-full" />;

  return (
    <div className=" px-6 md:px-12 py-8 border-2">
      <Head>
        <title>Todos</title>
        <meta name="description" content="Todos with RTK Query" />
      </Head>
      <h5 className="text-sm font-bold text-center mb-2">
        Todo List with Client-Side Rendering
      </h5>

      {/* <TodoForm /> */}

      <TodoDialog open={open} onOpen={setOpen} />

      <TodoList todos={data || ([] as Todo[])} />
      <PaginationMenu />
    </div>
  );
};

export default Todos;
