import { useRoutes } from "react-router-dom";

import { useAuth } from "~/hooks/useAuth";
import { commonRoutes } from "~/routes/common/_index";
import { privateRoutes } from "~/routes/private/_index";
import { publicRoutes } from "~/routes/public/_index";

export const AppRoutes = () => {
  const auth = useAuth();

  const routes = auth.isSignIn ? privateRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
