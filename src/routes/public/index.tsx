import { lazy } from "react";

import { PublicLayout } from "~/components/layout/PublicLayout";
import { FetchProvider } from "~/components/provider/Fetch";
import { nestOneRoutes } from "~/routes/public/nest-one";
import { nestPostsRoutes } from "~/routes/public/nest-posts";

const AboutPage = lazy(() => import("~/components/page/public/about.page"));
const NestOnePage = lazy(() => import("~/components/page/public/nest-one.page"));
const NestPostsPage = lazy(() => import("~/components/page/public/nest-posts.page"));
const PostDetailPage = lazy(() => import("~/components/page/public/post-detail.page"));
const PostListPage = lazy(() => import("~/components/page/public/posts.page"));

export const publicRoutes = [
  {
    path: "",
    element: (
      <PublicLayout>
        <FetchProvider />
      </PublicLayout>
    ),
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "posts",
        element: <PostListPage />,
      },
      {
        path: "posts/:postId",
        element: <PostDetailPage />,
      },
      {
        path: "nest-one",
        element: <NestOnePage />,
        children: [...nestOneRoutes],
      },
      {
        path: "nest-posts",
        element: <NestPostsPage />,
        children: [...nestPostsRoutes],
      },
    ],
  },
];
