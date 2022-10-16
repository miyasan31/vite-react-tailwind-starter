import { lazy } from "react";

import { Outlet } from "~/components/lib/router/Outlet";
import { Suspense } from "~/components/provider/Suspense";

const NestPostDetailPage = lazy(() => import("~/components/page/public/NestPostDetail"));

export const nestPostsRoutes = [
  {
    path: "",
    element: (
      <Suspense>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: ":postId",
        element: <NestPostDetailPage />,
      },
    ],
  },
];
