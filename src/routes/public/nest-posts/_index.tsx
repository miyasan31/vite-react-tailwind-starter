import { FetchProvider } from "~/components/provider/Fetch";
import { NestPostDetailPage } from "~/routes/public/nest-posts/post-detail.page";

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
