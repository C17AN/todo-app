import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { pageTransitionVariant } from "./animations/pageTransition.ts";
import { SessionProvider } from "./hooks/useSession.tsx";
import LayoutWithBottomNavigation from "./layout/LayoutWithBottomNavigation.tsx";
import LayoutWithoutBottomNavigation from "./layout/LayoutWithoutBottomNavigation.tsx";
import BookmarkPage from "./pages/bookmark";
import CalendarPage from "./pages/calendar.tsx";
import HomePage from "./pages/home.tsx";
import ProfilePage from "./pages/profile.tsx";
import ProjectPage from "./pages/project.tsx";
import SignInPage from "./pages/signIn.tsx";
import SignUpPage from "./pages/signUp.tsx";
import "./styles/global.scss";
import "./styles/reset.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SessionProvider>
        <AnimatePresence>
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
            <Route
              path="/calendar"
              element={
                <LayoutWithBottomNavigation>
                  <CalendarPage />
                </LayoutWithBottomNavigation>
              }
            />
            <Route
              path="/project"
              element={
                <LayoutWithBottomNavigation>
                  <ProjectPage />
                </LayoutWithBottomNavigation>
              }
            />
            <Route
              path="/profile"
              element={
                <LayoutWithBottomNavigation>
                  <ProfilePage />
                </LayoutWithBottomNavigation>
              }
            />
          </Routes>
        </AnimatePresence>
      </SessionProvider>
      {/* <RouterProvider router={router} /> */}
    </BrowserRouter>
  </QueryClientProvider>
);
