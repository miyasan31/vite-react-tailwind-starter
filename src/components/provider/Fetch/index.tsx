import { Outlet } from "~/components/lib/react-router/Outlet";
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
