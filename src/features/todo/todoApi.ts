import { tagTypes } from "@/constant";
import { api } from "../baseApi";
import { Params, Todo } from "@/types";

export const todoApi = api
  .enhanceEndpoints({ addTagTypes: [tagTypes.todo] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTodos: builder.query<Todo[], Params>({
        query: ({ _start = 0, _limit = 10 }) =>
          `/todos?${new URLSearchParams({
            _start: String(_start),
            _limit: String(_limit),
          })}`,
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetTodosQuery,
  util: { getRunningQueriesThunk },
} = todoApi;

export const { getTodos } = todoApi.endpoints;
