import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import "./index.css";
import App from "./App";
import { api } from "./components/data";

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={api}>
  <BrowserRouter>
    <App />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
