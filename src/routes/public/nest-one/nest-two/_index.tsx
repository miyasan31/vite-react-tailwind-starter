import { commonRoutes } from "~/routes/common/_index";
import { AboutPage } from "~/routes/public/nest-one/nest-two/about.page";
import { NestThreePage } from "~/routes/public/nest-one/nest-two/nest-three.page";

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
