import { PublicLayout } from "~/components/layout/PublicLayout";
import { AboutPage } from "~/components/page/public/about.page";
import { NestOnePage } from "~/components/page/public/nest-one.page";
import { NestPostsPage } from "~/components/page/public/nest-posts.page";
import { PostDetailPage } from "~/components/page/public/post-detail.page";
import { PostListPage } from "~/components/page/public/posts.page";
import { FetchProvider } from "~/components/provider/Fetch";
import { nestOneRoutes } from "~/routes/public/nest-one";
import { nestPostsRoutes } from "~/routes/public/nest-posts";

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
