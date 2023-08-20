import { Link } from "~/components/lib/router/Link";
import { successButton } from "~/shared/constants/buttonColor";

/**
 * @package
 */
export const NotFound = () => {
  return (
    <main className="bg-red-600 p-4 text-white">
      <h1>404 NotFound</h1>

      <div className="flex py-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
      </div>
    </main>
  );
};
