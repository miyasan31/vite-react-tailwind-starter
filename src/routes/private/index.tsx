import { PrivateLayout } from "~/components/layout/PrivateLayout";
import MainPage from "~/components/page/private/Main";
import { FetchProvider } from "~/components/provider/Fetch";

export const privateRoutes = [
  {
    path: "",
    element: (
      <PrivateLayout>
        <FetchProvider />
      </PrivateLayout>
    ),
    children: [
      {
        path: "main",
        element: <MainPage />,
      },
    ],
  },
];
