import { commonRoutes } from "~/routes/common/_index";
import { AboutPage } from "~/routes/public/nest-one/about.page";
import { NestTwoPage } from "~/routes/public/nest-one/nest-two.page";
import { nestTwoRoutes } from "~/routes/public/nest-one/nest-two/_index";

export const nestOneRoutes = [
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
];
