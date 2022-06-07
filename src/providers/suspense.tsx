import type { FC, ReactNode } from "react";
import { Suspense } from "react";

type Props = {
  children: ReactNode;
};

const SuspenseProvider: FC<Props> = ({ children }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default SuspenseProvider;
