import { lazy } from "react";

import { FetchProvider } from "~/components/provider/Fetch";

const NestPostDetailPage = lazy(() => import("~/components/page/public/nest-posts/post-detail.page"));

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
