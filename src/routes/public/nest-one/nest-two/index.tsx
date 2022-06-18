import { lazy } from "react";

import { FetchProvider } from "~/components/provider/Fetch";
import { commonRoutes } from "~/routes/common";

const AboutPage = lazy(() => import("~/components/page/public/nest-one/nest-two/about.page"));
const NestThreePage = lazy(() => import("~/components/page/public/nest-one/nest-two/nest-three.page"));

export const nestTwoRoutes = [
  {
    path: "",
    element: <FetchProvider />,
    children: [
      {
        path: "nest-three",
        element: <NestThreePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      ...commonRoutes,
    ],
  },
];
