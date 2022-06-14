import { Link } from "~/components/lib/Link";
import { Outlet } from "~/components/lib/Outlet";
import { successButton } from "~/constants/buttonColor";

const NestThreePage = () => {
  return (
    <main className="bg-slate-300 p-4">
      <h3>NestThree</h3>

      <div className="flex gap-4 py-4">
        <Link to="/nest-one/" className={successButton}>
          to /nest-one/
        </Link>
        <Link to="/nest-one/nest-two" className={successButton}>
          to /nest-one/nest-two
        </Link>
      </div>

      <Outlet />
    </main>
  );
};

export default NestThreePage;
