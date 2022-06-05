import { Link, Outlet } from "react-router-dom";

import { errorButton, successButton } from "~/constants/buttonColor";

export const Root = () => {
  return (
    <main className="bg-slate-700 p-4">
      <h1 className="text-white">RootPage</h1>

      <div className="flex gap-4 py-4">
        <Link to="/nest-one" className={successButton}>
          to /nest-one
        </Link>
        <Link to="/nest-one-about" className={successButton}>
          to /nest-one-bout
        </Link>
        <Link to="/404-not-found" className={errorButton}>
          to /404-not-found
        </Link>
      </div>

      <Outlet />
    </main>
  );
};
