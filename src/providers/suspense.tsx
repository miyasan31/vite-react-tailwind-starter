import type { FC, ReactNode } from "react";
import { Suspense } from "react";

import { Indicator } from "~/components/shared/Indicator";

type Props = {
  children: ReactNode;
};

const SuspenseProvider: FC<Props> = ({ children }) => {
  return <Suspense fallback={<Indicator />}>{children}</Suspense>;
};

export default SuspenseProvider;
