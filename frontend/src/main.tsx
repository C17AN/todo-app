import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { SessionProvider } from "./hooks/useSession.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SessionProvider>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutWithBottomNavigation
                variants={pageTransitionVariant}
                initial="hidden"
                animate="enter"
                exit="exit"
              >
                <HomePage />
              </LayoutWithBottomNavigation>
            }
          />
          <Route
            path="/signIn"
            element={
              <LayoutWithoutBottomNavigation
                variants={pageTransitionVariant}
                initial="hidden"
                animate="enter"
                exit="exit"
              >
                <SignInPage />
              </LayoutWithoutBottomNavigation>
            }
          />
          <Route
            path="/signUp"
            element={
              <LayoutWithoutBottomNavigation
                variants={pageTransitionVariant}
                initial="hidden"
                animate="enter"
                exit="exit"
              >
                <SignUpPage />
              </LayoutWithoutBottomNavigation>
            }
          />
          <Route
            path="/bookmark"
            element={
              <LayoutWithBottomNavigation>
                <BookmarkPage />
              </LayoutWithBottomNavigation>
            }
          />
        </Routes>
      </SessionProvider>

      {/* <RouterProvider router={router} /> */}
    </BrowserRouter>
  </QueryClientProvider>
);
