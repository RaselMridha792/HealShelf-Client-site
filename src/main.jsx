import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import MainPage from "./main/MainPage";
import AuthProvider from "./Context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router}>
          <MainPage></MainPage>
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
