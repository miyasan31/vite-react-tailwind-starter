import type { FC, ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import { LayoutFallback } from "./Fallback";
import type { ErrorFallbackProps } from "./Fallback/ErrorFallbackProps";

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
