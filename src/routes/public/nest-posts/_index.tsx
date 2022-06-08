import { NestPostDetailPage } from "~/routes/public/nest-posts/post-detail.page";

export const nestPostsRoutes = [
  {
    path: ":postId",
    element: <NestPostDetailPage />,
  },
];
