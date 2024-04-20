import { tagTypes } from "@/constant";
import { api } from "../baseApi";
import { Params, Todo } from "@/types";

export const todoApi = api
  .enhanceEndpoints({ addTagTypes: [tagTypes.todo] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTodos: builder.query<Todo[], Params>({
        query: ({ _start = "0", _limit = "10" }) =>
          `/todos?${new URLSearchParams({
            _start,
            _limit,
          })}`,
        providesTags: (res) =>
          Array.isArray(res) && res?.length > 0
            ? [
                ...res?.map((todo) => ({
                  type: tagTypes.todo,
                  id: todo.id,
                })),
                { type: tagTypes.todo, id: "LIST" },
              ]
            : [{ type: tagTypes.todo, id: "LIST" }],
      }),
      addTodo: builder.mutation<Partial<Todo>, { data: Partial<Todo> }>({
        query: ({ data }) => {
          return {
            url: `/todos`,
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: (res) => [
          { type: tagTypes.todo, id: res?.id },
          { type: tagTypes.todo, id: "LIST" },
        ],
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  util: { getRunningQueriesThunk },
} = todoApi;

export const { getTodos } = todoApi.endpoints;
