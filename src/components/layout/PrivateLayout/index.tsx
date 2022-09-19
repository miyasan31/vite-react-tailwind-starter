import type { FC, ReactNode } from "react";

import { Link } from "~/components/lib/react-router/Link";
import { errorButton, successButton } from "~/constants/buttonColor";

type LayoutProps = {
  children: ReactNode;
};

export const PrivateLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="p-4 h-full min-h-screen bg-slate-900">
      <div className="flex flex-wrap gap-4 pb-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
        <Link to="/nest-one" className={successButton}>
          to /nest-one
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
        <Link to="/not-found" className={errorButton}>
          to /not-found
        </Link>
      </div>

      {children}
    </main>
  );
};
