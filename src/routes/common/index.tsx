import NotFoundPage from "~/components/page/common/404.page";

export const commonRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
