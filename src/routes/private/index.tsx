import { PrivateLayout } from "~/components/layout/PrivateLayout";
import MainPage from "~/components/page/private/Main";

export const privateRoutes = [
  {
    path: "",
    element: <PrivateLayout />,
    children: [
      {
        path: "main",
        element: <MainPage />,
      },
    ],
  },
];
