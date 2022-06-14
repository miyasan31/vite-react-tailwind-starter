import { lazy } from "react";

const NotFoundPage = lazy(() => import("~/components/page/common/404.page"));

export const commonRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
