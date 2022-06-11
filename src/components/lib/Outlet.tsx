import type { FC } from "react";
import type { OutletProps } from "react-router-dom";
import { Outlet as ReactRouterOutlet } from "react-router-dom";

export const Outlet: FC<OutletProps> = (props) => {
  return <ReactRouterOutlet {...props} />;
};
