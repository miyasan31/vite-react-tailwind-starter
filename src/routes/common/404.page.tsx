import { Link } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

export const NotFoundPage = () => {
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
