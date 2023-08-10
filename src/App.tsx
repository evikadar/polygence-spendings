import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Login = lazy(() => import("./components/login/login"));
const RandomActOfKindnessList = lazy(
  () => import("./components/spendings/spendingsList")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route
        path="spendings"
        element={
          <Suspense fallback={<>...</>}>
            <RandomActOfKindnessList />
          </Suspense>
        }
      />
      <Route
        path=""
        element={
          <Suspense fallback={<>...</>}>
            <Login />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
