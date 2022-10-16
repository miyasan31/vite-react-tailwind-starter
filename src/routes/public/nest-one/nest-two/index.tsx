import { lazy } from "react";

import { FetchProvider } from "~/components/provider/Fetch";
import { commonRoutes } from "~/routes/common";

const NestThreePage = lazy(() => import("~/components/page/public/NestThree"));

export const nestTwoRoutes = [
  {
    path: "",
    element: <FetchProvider />,
    children: [
      {
        path: "nest-three",
        element: <NestThreePage />,
      },
      ...commonRoutes,
    ],
  },
];
