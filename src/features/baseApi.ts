import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi as baseUrl } from "../constant";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: () => ({}),
});
