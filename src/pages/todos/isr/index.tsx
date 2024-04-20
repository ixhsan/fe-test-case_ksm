import { getRunningQueriesThunk, getTodos } from "@/features/todo/todoApi";
import { wrapper } from "@/store";
import { Todo, TodosProps } from "@/types";
import { GetStaticProps } from "next";
import Todos from "..";

export default Todos;

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    console.log({ context });
    // Fetch data from external API

    const data = store.dispatch(
      getTodos.initiate({
        // _start: typeof query._start === "string" ? query._start : "0",
        // _limit: typeof query._limit === "string" ? query._limit : "10",
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
      revalidate: 10,
    };
  }
) satisfies GetStaticProps<TodosProps>;
