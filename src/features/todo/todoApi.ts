import { tagTypes } from "@/constant";
import { baseApi } from "../baseApi";
import { Todo } from "@/types";

export const todoApi = baseApi
  .enhanceEndpoints({ addTagTypes: [tagTypes.todo] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTodos: builder.query<Todo[], void>({
        query: () => `/todos`,
      }),
    }),
    overrideExisting: false,
  });

export const { useGetTodosQuery } = todoApi;
