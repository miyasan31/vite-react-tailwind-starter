import { useRoutes } from "react-router-dom";

import { useAuth } from "~/libs/hook/useAuth";
import { commonRoutes } from "~/routes/common";
import { privateRoutes } from "~/routes/private";
import { publicRoutes } from "~/routes/public";

export const AppRoutes = () => {
  const auth = useAuth();

  const routes = auth.isSignIn ? privateRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
