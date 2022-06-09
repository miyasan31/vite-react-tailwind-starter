import { PublicLayout } from "~/components/layout/PublicLayout";
import { FetchProvider } from "~/components/provider/Fetch";
import { AboutPage } from "~/routes/public/about.page";
import { NestOnePage } from "~/routes/public/nest-one.page";
import { nestOneRoutes } from "~/routes/public/nest-one/_index";
import { NestPostsPage } from "~/routes/public/nest-posts.page";
import { nestPostsRoutes } from "~/routes/public/nest-posts/_index";
import { PostDetailPage } from "~/routes/public/post-detail.page";
import { PostListPage } from "~/routes/public/posts.page";

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
