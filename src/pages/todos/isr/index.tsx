import { getRunningQueriesThunk, getTodos } from "@/features/todo/todoApi";
import { wrapper } from "@/store";
import { Todo, TodosProps } from "@/types";
import { GetStaticProps } from "next";
import Todos from "..";

export default Todos;

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    // console.log({ context: context.preview, data: context.previewData });

    const data = await store.dispatch(
      getTodos.initiate({
        _start:
          context.params && typeof context.params._start === "string"
            ? context.params._start
            : "0",
        _limit:
          context.params && typeof context.params._limit === "string"
            ? context.params._limit
            : "10",
      })
    );

    // await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {
        title: "Incremental Static Regeneration (ISR)",
        mode: "isr",
        todos: data.isSuccess ? data.data : ([] as Todo[]),
        requestId: data.isSuccess ? data.requestId : "",
        fulfilledTime: data.isSuccess ? data.fulfilledTimeStamp : 0,
        updatedAt: Date.now(),
      },
      revalidate: 10,
    };
  }
) satisfies GetStaticProps<TodosProps>;
