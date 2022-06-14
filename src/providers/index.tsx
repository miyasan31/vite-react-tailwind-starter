import type { FC, ReactNode } from "react";

import { ErrorBoundaryProvider } from "~/providers/error-boundary";
import { ReactHelmetProvider } from "~/providers/react-helmet";
import { ReactQueryProvider } from "~/providers/react-query";
import { ReactRouterProvider } from "~/providers/react-router";
import { SuspenseProvider } from "~/providers/suspense";

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundaryProvider>
      <SuspenseProvider>
        <ReactHelmetProvider>
          <ReactQueryProvider>
            <ReactRouterProvider>
              <>{children}</>
            </ReactRouterProvider>
          </ReactQueryProvider>
        </ReactHelmetProvider>
      </SuspenseProvider>
    </ErrorBoundaryProvider>
  );
};
