import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/layout";
import BookmarkPage from "./pages/bookmark";
import HomePage from "./pages/home.tsx";
import SignInPage from "./pages/signIn.tsx";
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
    path: "/signIn",
    element: <SignInPage />,
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
