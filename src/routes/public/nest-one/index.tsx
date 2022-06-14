import AboutPage from "~/components/page/public/nest-one/about.page";
import NestTwoPage from "~/components/page/public/nest-one/nest-two.page";
import { FetchProvider } from "~/components/provider/Fetch";
import { commonRoutes } from "~/routes/common";
import { nestTwoRoutes } from "~/routes/public/nest-one/nest-two";

export const nestOneRoutes = [
  {
    path: "",
    element: <FetchProvider />,
    children: [
      {
        path: "nest-two",
        element: <NestTwoPage />,
        children: [...nestTwoRoutes],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      ...commonRoutes,
    ],
  },
];
