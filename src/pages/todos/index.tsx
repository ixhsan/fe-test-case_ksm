import { useGetTodosQuery } from "@/features/todo/todoApi";
import { Todo, TodosProps } from "@/types";
import { FC, useEffect, useState } from "react";

import { useRouter } from "next/router";

import PaginationMenu from "@/components/PaginationMenu";
import Head from "next/head";
import TodoList from "@/components/TodoList";
import TodoDialog from "@/components/TodoDialog";
import moment from "moment";
import usePagination from "@/hooks/usePagination";

const Todos: FC<TodosProps> = ({
  todos,
  mode = "csr",
  requestId: reqSSR,
  fulfilledTime: fulSSR,
  updatedAt,
  title,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { _start, _limit } = usePagination();

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

  useEffect(() => {
    console.log({
      Rendered: moment(new Date(updatedAt || "")).format("h:mm:ssa"),
      Loaded: moment(new Date(Date.now())).format("h:mm:ssa"),
    });
  }, []);

  const selectedData = mode === "isr" && parseInt(_start) < 11 ? todos : data;

  if (isLoading || router.isFallback) return <p>Loading data....</p>;

  return (
    <div className=" px-6 md:px-12 py-8 border-2">
      <Head>
        <title>Todos</title>
        <meta name="description" content="Todos with RTK Query" />
      </Head>
      <h5 className="text-sm font-bold text-center mb-2">
        Todo List with {title ? title : `Client-Side Rendering`}
      </h5>

      <TodoDialog open={open} onOpen={setOpen} />

      <TodoList todos={selectedData || ([] as Todo[])} />
      <PaginationMenu />
      <hr />
      <div className="mt-10 flex justify-between">
        <p>RTKq Server-Client requestId & fulfilledTime comparison</p>
        <div className="flex flex-col gap-2">
          <p
            className={`rounded-sm text-right px-4 ${
              fulSSR === fulCSR ? `bg-green-400` : `bg-rose-400`
            }`}
          >
            is requestId the same: {fulSSR === fulCSR ? "True" : "False"}{" "}
          </p>
          <p
            className={`rounded-sm text-right px-4 ${
              fulSSR === fulCSR ? `bg-green-400` : `bg-rose-400`
            }`}
          >
            is fulfilledTime the same: {reqSSR === reqCSR ? "True" : "False"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todos;
