import type { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: ReactNode;
};

const ErrorBoundaryProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={() => <p className="text-rose-500">Provider ErrorBoundary</p>}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryProvider;
