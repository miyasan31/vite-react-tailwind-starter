import type { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const ReactQueryProvider: FC<Props> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
