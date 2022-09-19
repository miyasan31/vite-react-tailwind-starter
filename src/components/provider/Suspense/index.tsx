import type { FC, SuspenseProps } from "react";
import { Suspense as ReactSuspense } from "react";

import { Indicator } from "~/components/shared/Indicator";

export const Suspense: FC<SuspenseProps> = ({ children, fallback = <Indicator /> }) => {
  return <ReactSuspense fallback={fallback}>{children}</ReactSuspense>;
};
