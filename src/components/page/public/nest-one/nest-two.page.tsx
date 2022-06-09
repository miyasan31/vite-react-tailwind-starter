import { Link, Outlet } from "react-router-dom";

import { errorButton, successButton } from "~/constants/buttonColor";

export const NestTwoPage = () => {
  return (
    <main className="bg-slate-500 p-4">
      <h2 className="text-white">NestTwo</h2>

      <div className="flex gap-4 py-4">
        <Link to="/nest-one/nest-two/nest-three" className={successButton}>
          to /nest-one/nest-two/nest-three
        </Link>
        <Link to="/nest-one/nest-two/about" className={successButton}>
          to /nest-one/nest-two/about
        </Link>
        <Link to="/nest-one/nest-two/404-not-found" className={errorButton}>
          to /nest-one/nest-two/404-not-found
        </Link>
      </div>

      <Outlet />
    </main>
  );
};
