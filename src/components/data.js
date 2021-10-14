import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsDataApi_Key = localStorage.getItem("newsData");

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const dataListApi = createApi({
  reducerPath: "dataList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/coins/markets",
  }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: ({ page, limit }) =>
        `?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${page}&sparkline=false`,
    }),
  }),
});

export const { useListPostsQuery } = dataListApi;

export const newsDataApi = createApi({
  reducerPath: "newsData",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    searchNews: builder.query({
      query: (props) =>
        `${proxyUrl}https://newsdata.io/api/1/news?apikey=${
          props.newsData || newsDataApi_Key
        }&q=${props.coin}&language=en`,
    }),
  }),
});

export const { useSearchNewsQuery } = newsDataApi;

export const coinsDataApi = createApi({
  reducerPath: "coinsData",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    coinData: builder.query({
      query: (props) =>
        `https://api.coingecko.com/api/v3/coins/${props.coinId}`,
    }),
  }),
});

export const { useCoinDataQuery } = coinsDataApi;
