import { lazy } from "react";

import { FetchProvider } from "~/components/provider/Fetch";

const NestPostDetailPage = lazy(() => import("~/components/page/public/NestPostDetail"));

export const nestPostsRoutes = [
  {
    path: "",
    element: <FetchProvider />,
    children: [
      {
        path: ":postId",
        element: <NestPostDetailPage />,
      },
    ],
  },
];
