import type { FC, ReactNode } from "react";

import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { AppFallback } from "~/components/provider/ErrorBoundary/Fallback";
import { Suspense } from "~/components/provider/Suspense";
import { ReactHelmetProvider } from "~/providers/ReactHelmetProvider";
import { ReactQueryProvider } from "~/providers/ReactQueryProvider";
import { ReactRouterProvider } from "~/providers/ReactRouterProvider";

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={AppFallback}>
      <Suspense>
        <ReactHelmetProvider>
          <ReactQueryProvider>
            <ReactRouterProvider>
              <>{children}</>
            </ReactRouterProvider>
          </ReactQueryProvider>
        </ReactHelmetProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
