import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/coins/markets",
  }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: (page = 1, limit = 20) =>
        `?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${page}&sparkline=false`,
    }),
  }),
});

export const { useListPostsQuery } = api;
