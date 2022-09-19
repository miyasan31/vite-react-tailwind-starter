import { useRoutes } from "react-router-dom";

import { commonRoutes } from "~/routes/common";
import { privateRoutes } from "~/routes/private";
import { publicRoutes } from "~/routes/public";
import { authService } from "~/services/auth.service";

const { useAuth } = authService;

export const AppRoutes = () => {
  const isSignIn = useAuth();
  const routes = isSignIn ? privateRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};
