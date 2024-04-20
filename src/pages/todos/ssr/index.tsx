import { getRunningQueriesThunk, getTodos } from "@/features/todo/todoApi";
import { wrapper } from "@/store";
import { Todo, TodosProps } from "@/types";
import { GetServerSideProps } from "next";
import Todos from "..";

export default Todos;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, query }) => {
      // Fetch data from external API

      const data = store.dispatch(
        getTodos.initiate({
          _start: typeof query._start === "string" ? query._start : "0",
          _limit: typeof query._limit === "string" ? query._limit : "10",
        })
      );
      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      return {
        props: {
          todos: [] as Todo[],
          requestId: (await data).isSuccess ? data.requestId : "",
          fulfilledTime: (await data).isSuccess
            ? (await data).fulfilledTimeStamp
            : 0,
        },
      };
    }
) satisfies GetServerSideProps<TodosProps>;
