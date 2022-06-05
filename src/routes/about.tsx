import { Link } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

export const About = () => {
  return (
    <main className="bg-slate-100 p-4">
      <h1>AboutPage</h1>

      <div className="flex py-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
      </div>
    </main>
  );
};
