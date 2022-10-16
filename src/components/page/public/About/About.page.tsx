import { Link } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

export const About = () => {
  return (
    <main className="p-4 bg-slate-700">
      <h1 className="text-white">AboutPage</h1>

      <div className="flex py-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
      </div>
    </main>
  );
};
