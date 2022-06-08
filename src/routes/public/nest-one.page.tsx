import { Link, Outlet } from "react-router-dom";

import { errorButton, successButton } from "~/constants/buttonColor";

export const NestOnePage = () => {
  return (
    <main className="bg-slate-700 p-4">
      <h2 className="text-white">NestOne</h2>

      <div className="flex gap-4 py-4">
        <Link to="/nest-one/nest-two" className={successButton}>
          to /nest-one/nest-two
        </Link>
        <Link to="/nest-one/about" className={successButton}>
          to /nest-one/about
        </Link>
        <Link to="/nest-one/404-not-found" className={errorButton}>
          to /nest-one/404-not-found
        </Link>
      </div>

      <Outlet />
    </main>
  );
};
