import { configureStore } from "@reduxjs/toolkit";
import { coinsDataApi, newsDataApi, dataListApi } from "./data";

export const store = configureStore({
  reducer: {
    [dataListApi.reducerPath]: dataListApi.reducer,
    [coinsDataApi.reducerPath]: coinsDataApi.reducer,
    [newsDataApi.reducerPath]: newsDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      coinsDataApi.middleware,
      dataListApi.middleware,
      newsDataApi.middleware,
    ]),
});
