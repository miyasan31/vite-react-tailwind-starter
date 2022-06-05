import { Link, Outlet } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

export const NestThree = () => {
  return (
    <main className="bg-slate-100 p-4">
      <h4>NestThree</h4>

      <div className="flex gap-4 py-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
        <Link to="/nest-one" className={successButton}>
          to /nest-one
        </Link>
        <Link to="/nest-one/nest-two" className={successButton}>
          to /nest-one/nest-two
        </Link>
      </div>

      <Outlet />
    </main>
  );
};
