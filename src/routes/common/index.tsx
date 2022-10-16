import { lazy } from "react";

const NotFoundPage = lazy(() => import("~/components/page/common/404"));

export const commonRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
