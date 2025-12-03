import { Navigate, useRoutes } from "react-router";
import { Login } from "@/pages/auth";
import { PageNotFound } from "@/pages/exceptions";

const routers = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];

export default function Router() {
  return useRoutes(routers);
}
