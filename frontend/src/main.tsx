import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import BookmarkPage from "./pages/bookmark";
import HomePage from "./pages/home.tsx";
import SignInPage from "./pages/signIn.tsx";
import SignUpPage from "./pages/signUp.tsx";
import LayoutWithBottomNavigation from "./layout/LayoutWithBottomNavigation.tsx";
import LayoutWithoutBottomNavigation from "./layout/LayoutWithoutBottomNavigation.tsx";
import "./styles/reset.css";
import "./styles/global.scss";
import { pageTransitionVariant } from "./animations/pageTransition.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutWithBottomNavigation
        variants={pageTransitionVariant}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        <HomePage />
      </LayoutWithBottomNavigation>
    ),
  },
  {
    path: "/signIn",
    element: (
      <LayoutWithoutBottomNavigation
        variants={pageTransitionVariant}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        <SignInPage />
      </LayoutWithoutBottomNavigation>
    ),
  },
  {
    path: "/signUp",
    element: (
      <LayoutWithoutBottomNavigation
        variants={pageTransitionVariant}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        <SignUpPage />
      </LayoutWithoutBottomNavigation>
    ),
  },
  {
    path: "/bookmark",
    element: (
      <LayoutWithBottomNavigation>
        <BookmarkPage />
      </LayoutWithBottomNavigation>
    ),
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
