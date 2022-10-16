import { lazy } from "react";

import { PublicLayout } from "~/components/layout/PublicLayout";
import { nestOneRoutes } from "~/routes/public/nest-one";
import { nestPostsRoutes } from "~/routes/public/nest-posts";

const NestOnePage = lazy(() => import("~/components/page/public/NestOne"));
const AboutPage = lazy(() => import("~/components/page/public/About"));
const PostsPage = lazy(() => import("~/components/page/public/Posts"));
const NestPostsPage = lazy(() => import("~/components/page/public/NestPosts"));
const PostDetailPage = lazy(() => import("~/components/page/public/PostDetail"));

export const publicRoutes = [
  {
    path: "",
    element: <PublicLayout />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
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
