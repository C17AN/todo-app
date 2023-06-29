import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

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
import "./styles/route-animation.scss";

useLocation;

// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
useLocation;

const queryClient = new QueryClient();

const Root = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {/* <TransitionGroup className="transitions-wrapper">
            <CSSTransition
              in={true}
              key={location.pathname}
              classNames={"page"}
              timeout={300}
            > */}
          {/* Note: react-transition-group 없이도 라우팅 애니메이션을 적용할 수 있다. */}
          {/* Ref: https://dev.to/fazliddin04/react-router-v6-animated-transitions-diy-3e6l */}
          <span
            onAnimationEnd={() => {
              if (transitionStage === "fadeOut") {
                setTransistionStage("fadeIn");
                setDisplayLocation(location);
              }
            }}
          >
            <Routes location={displayLocation}>
              <Route
                path="/"
                element={
                  <LayoutWithBottomNavigation className={`${transitionStage}`}>
                    <HomePage />
                  </LayoutWithBottomNavigation>
                }
              />
              <Route
                path="/signIn"
                element={
                  <LayoutWithoutBottomNavigation>
                    <SignInPage />
                  </LayoutWithoutBottomNavigation>
                }
              />
              <Route
                path="/signUp"
                element={
                  <LayoutWithoutBottomNavigation>
                    <SignUpPage />
                  </LayoutWithoutBottomNavigation>
                }
              />
              <Route
                path="/bookmark"
                element={
                  <LayoutWithBottomNavigation className={`${transitionStage}`}>
                    <BookmarkPage />
                  </LayoutWithBottomNavigation>
                }
              />
              <Route
                path="/calendar"
                element={
                  <LayoutWithBottomNavigation className={`${transitionStage}`}>
                    <CalendarPage />
                  </LayoutWithBottomNavigation>
                }
              />
              <Route
                path="/project"
                element={
                  <LayoutWithBottomNavigation className={`${transitionStage}`}>
                    <ProjectPage />
                  </LayoutWithBottomNavigation>
                }
              />
              <Route
                path="/profile"
                element={
                  <LayoutWithBottomNavigation className={`${transitionStage}`}>
                    <ProfilePage />
                  </LayoutWithBottomNavigation>
                }
              />
            </Routes>
          </span>
          {/* </CSSTransition>
          </TransitionGroup> */}
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
