// import {} from "constants/app-paths";
import { Icons } from "@/components/icons";
import { TABLE_DEMO_PATH, LOGIN_PATH } from "@/constants/app-paths";
import Layout from "@/layout";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router";

const AuthenticationPage = lazy(() => import("@/features/auth"));
const TaskPage = lazy(() => import("@/features/tableDemo"));

//   const ClientsListing = lazy(() => import("features/clients/listings"))

const RoutesDirectory = () => {
  const token = useSelector((state) => state.app.auth.token);

  return (
    <Suspense
      fallback={
        <div className="container relative min-h-screen">
          <Icons.spinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={TABLE_DEMO_PATH} />
        <Route
          path={LOGIN_PATH}
          element={
            !!token ? <Navigate to={TABLE_DEMO_PATH} /> : <AuthenticationPage />
          }
          name="sign-in"
        />
        <Route
          path="/"
          element={
            !!token ? (
              <Layout>
                <Outlet />
              </Layout>
            ) : (
              <Navigate to={LOGIN_PATH} />
            )
          }
        >
          <Route
            path={TABLE_DEMO_PATH}
            element={<TaskPage />}
            name="tableDemo"
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default RoutesDirectory;
