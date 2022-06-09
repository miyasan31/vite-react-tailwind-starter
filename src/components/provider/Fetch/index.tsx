import { Outlet } from "react-router-dom";

import { ReactErrorBoundary } from "~/components/provider/ErrorBoundary";
import { ReactSuspense } from "~/components/provider/Suspense";

export const FetchProvider = () => {
  return (
    <ReactErrorBoundary>
      <ReactSuspense>
        <Outlet />
      </ReactSuspense>
    </ReactErrorBoundary>
  );
};
