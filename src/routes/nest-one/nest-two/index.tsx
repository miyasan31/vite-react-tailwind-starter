import { Link, Outlet } from "react-router-dom";

import { errorButton, successButton } from "~/constants/buttonColor";

export const NestTwo = () => {
  return (
    <main className="bg-slate-300 p-4">
      <h3>NestTwo</h3>

      <div className="flex gap-4 py-4">
        <Link to="/nest-one/nest-two/nest-three" className={successButton}>
          to /nest-one/nest-two/nest-three
        </Link>
        <Link to="/nest-one/nest-two/nest-three-about" className={successButton}>
          to /nest-one/nest-two/nest-three-about
        </Link>
        <Link to="/nest-one/nest-two/404-not-found" className={errorButton}>
          to /nest-one/nest-two/404-not-found
        </Link>
      </div>

      <Outlet />
    </main>
  );
};
