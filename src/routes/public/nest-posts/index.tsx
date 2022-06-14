import NestPostDetailPage from "~/components/page/public/nest-posts/post-detail.page";
import { FetchProvider } from "~/components/provider/Fetch";

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
