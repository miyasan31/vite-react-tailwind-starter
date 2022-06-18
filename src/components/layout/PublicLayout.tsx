import type { FC, ReactNode } from "react";

import { Link } from "~/components/lib/Link";
import { errorButton, successButton } from "~/constants/buttonColor";

type LayoutProps = {
  children: ReactNode;
};

export const PublicLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-full min-h-screen bg-slate-900 p-4">
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
