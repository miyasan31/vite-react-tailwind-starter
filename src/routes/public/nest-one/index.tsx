import { lazy } from "react";

import { FetchProvider } from "~/components/provider/Fetch";
import { commonRoutes } from "~/routes/common";
import { nestTwoRoutes } from "~/routes/public/nest-one/nest-two";

const NestTwoPage = lazy(() => import("~/components/page/public/NestTwo"));

export const nestOneRoutes = [
  {
    path: "",
    element: <FetchProvider />,
    children: [
      {
        path: "nest-two",
        element: <NestTwoPage />,
        children: [...nestTwoRoutes],
      },
      ...commonRoutes,
    ],
  },
];
