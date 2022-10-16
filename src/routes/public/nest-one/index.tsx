import { lazy } from "react";

import { Outlet } from "~/components/lib/router/Outlet";
import { Suspense } from "~/components/provider/Suspense";
import { commonRoutes } from "~/routes/common";
import { nestTwoRoutes } from "~/routes/public/nest-one/nest-two";

const NestTwoPage = lazy(() => import("~/components/page/public/NestTwo"));

export const nestOneRoutes = [
  {
    path: "",
    element: (
      <Suspense>
        <Outlet />
      </Suspense>
    ),
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
