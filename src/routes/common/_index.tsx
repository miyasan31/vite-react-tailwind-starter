import { NotFoundPage } from "~/routes/common/404.page";

export const commonRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
