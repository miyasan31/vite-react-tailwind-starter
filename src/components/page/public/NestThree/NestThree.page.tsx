import { Link } from "~/components/lib/router/Link";
import { Outlet } from "~/components/lib/router/Outlet";
import { successButton } from "~/constants/buttonColor";

/**
 * @package
 */
export const NestThree = () => {
  return (
    <main className="p-4 bg-slate-300">
      <h3>NestThree</h3>

      <div className="flex flex-wrap gap-4 py-4">
        <Link to="/nest-one/" className={successButton}>
          to /nest-one/
        </Link>
      </div>

      <Outlet />
    </main>
  );
};
