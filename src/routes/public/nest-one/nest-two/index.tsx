import { AboutPage } from "~/components/page/public/nest-one/nest-two/about.page";
import { NestThreePage } from "~/components/page/public/nest-one/nest-two/nest-three.page";
import { commonRoutes } from "~/routes/common";

export const nestTwoRoutes = [
  {
    path: "nest-three",
    element: <NestThreePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  ...commonRoutes,
];
