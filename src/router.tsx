import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "@/App";

const Home = lazy(() => import("@/routes/home"));
const Notfound = lazy(() => import("@/routes/not-found"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="home"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense>
            <Notfound />
          </Suspense>
        }
      />
    </Route>,
  ),
);

export default router;
