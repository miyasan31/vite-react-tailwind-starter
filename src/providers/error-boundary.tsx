import type { FC, ReactNode } from "react";

import { ReactErrorBoundary } from "~/components/provider/ErrorBoundary";
import { AppFallback } from "~/components/provider/ErrorBoundary/Fallback";

type Props = {
  children: ReactNode;
};

export const ErrorBoundaryProvider: FC<Props> = ({ children }) => {
  return <ReactErrorBoundary FallbackComponent={AppFallback}>{children}</ReactErrorBoundary>;
};
