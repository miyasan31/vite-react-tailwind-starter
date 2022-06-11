import type { FC } from "react";
import type { LinkProps } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";

export const Link: FC<LinkProps> = (props) => {
  return <ReactRouterLink {...props} />;
};
