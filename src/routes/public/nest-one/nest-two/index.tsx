import { lazy } from "react";

import { Outlet } from "~/components/lib/router/Outlet";
import { Suspense } from "~/components/provider/Suspense";
import { commonRoutes } from "~/routes/common";

const NestThreePage = lazy(() => import("~/components/page/public/NestThree"));

export const nestTwoRoutes = [
  {
    path: "",
    element: (
      <Suspense>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: "nest-three",
        element: <NestThreePage />,
      },
      ...commonRoutes,
    ],
  },
];
