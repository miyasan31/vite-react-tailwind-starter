import type { FC, ReactNode } from "react";

import { ReactSuspense } from "~/components/provider/Suspense";

type Props = {
  children: ReactNode;
};

export const SuspenseProvider: FC<Props> = ({ children }) => {
  return <ReactSuspense>{children}</ReactSuspense>;
};
