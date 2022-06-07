import type { FC, ReactNode } from "react";

import ErrorBoundaryProvider from "~/providers/error-boundary";
import ReactHelmetProvider from "~/providers/react-helmet";
import ReactQueryProvider from "~/providers/react-query";
import SuspenseProvider from "~/providers/suspense";

type Props = {
  children: ReactNode;
};

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundaryProvider>
      <SuspenseProvider>
        <ReactHelmetProvider>
          <ReactQueryProvider>
            <>{children}</>
          </ReactQueryProvider>
        </ReactHelmetProvider>
      </SuspenseProvider>
    </ErrorBoundaryProvider>
  );
};

export default AppProvider;
