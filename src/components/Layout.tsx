import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-full min-h-screen bg-slate-900 p-4">
      <div className="flex gap-4 pb-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
        <Link to="/about" className={successButton}>
          to /about
        </Link>
        <Link to="/posts" className={successButton}>
          to /posts
        </Link>
        <Link to="/nest-posts" className={successButton}>
          to /nest-posts
        </Link>
      </div>
      {children}
    </main>
  );
};
