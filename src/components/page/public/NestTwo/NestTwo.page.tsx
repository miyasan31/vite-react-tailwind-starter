import { Link } from "~/components/lib/router/Link";
import { Outlet } from "~/components/lib/router/Outlet";
import { errorButton, successButton } from "~/constants/buttonColor";

/**
 * @package
 */
export const NestTwo = () => {
  return (
    <main className="p-4 bg-slate-500">
      <h2 className="text-white">NestTwo</h2>

      <div className="flex flex-wrap gap-4 py-4">
        <Link to="/nest-one/nest-two/nest-three" className={successButton}>
          to /nest-one/nest-two/nest-three
        </Link>
        <Link to="/nest-one/nest-two/404-not-found" className={errorButton}>
          to /nest-one/nest-two/404-not-found
        </Link>
      </div>

      <Outlet />
    </main>
  );
};
