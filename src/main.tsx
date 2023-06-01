import ReactDOM from "react-dom/client";
import HomePage from "./pages/home.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/layout/index.tsx";
import BookmarkPage from "./pages/bookmark.tsx";
import "./styles/reset.css";
import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/bookmark",
    element: (
      <Layout>
        <BookmarkPage />
      </Layout>
    ),
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
