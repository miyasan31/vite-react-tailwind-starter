import { Outlet } from "react-router-dom";

import { PrivateLayout } from "~/components/layout/PrivateLayout";
import { MainPage } from "~/routes/private/main.page";

const App = () => {
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export const privateRoutes = [
  {
    path: "",
    element: <App />,
    children: [{ path: "main", element: <MainPage /> }],
  },
];
