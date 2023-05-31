import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles/reset.css";
import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
