import React from "react";
import ReactDOM from "react-dom/client";
import { Client, Provider, fetchExchange, cacheExchange } from "urql";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/root";
import "./index.css";
import { useTokenStore } from "./global-stores/useTokenStore";
import { AuthContextProvider } from "./contexts/AuthContext";

const client = new Client({
  url: "http://localhost:4000/graphql",
  exchanges: [fetchExchange, cacheExchange],
  fetchOptions: {
    headers: {
      authorization: `Bearer ${useTokenStore.getState().accessToken}`,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider value={client}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
