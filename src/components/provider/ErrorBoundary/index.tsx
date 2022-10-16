import type { FC, ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import { LayoutFallback } from "~/components/provider/ErrorBoundary/Fallback";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

type ErrorBoundaryProps = {
  children: ReactNode;
  onReset?: () => void;
  FallbackComponent?: FC<ErrorFallbackProps>;
};

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, onReset, FallbackComponent }) => {
  return (
    <ReactErrorBoundary FallbackComponent={FallbackComponent || LayoutFallback} onReset={onReset}>
      {children}
    </ReactErrorBoundary>
  );
};
