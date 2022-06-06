import type { FC, ReactNode } from "react";

import ReactQueryProvider from "~/providers/react-query";

type Props = {
  children: ReactNode;
};

const AppProvider: FC<Props> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default AppProvider;
