import type { FC, SuspenseProps } from "react";
import { Suspense } from "react";

import { Indicator } from "~/components/shared/Indicator";

export const ReactSuspense: FC<SuspenseProps> = ({ children, fallback = <Indicator /> }) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
