import type { FC, ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

type Props = {
  children: ReactNode;
};

const ReactHelmetProvider: FC<Props> = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default ReactHelmetProvider;
