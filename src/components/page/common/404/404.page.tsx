import { Link } from "~/components/lib/router/Link";
import { successButton } from "~/constants/buttonColor";

/**
 * @package
 */
export const NotFound = () => {
  return (
    <main className="p-4 text-white bg-red-600">
      <h1>404 NotFound</h1>

      <div className="flex py-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
      </div>
    </main>
  );
};
