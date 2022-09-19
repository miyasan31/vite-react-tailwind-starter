import { Head } from "~/components/lib/react-helmet-async/Head";
import { Link } from "~/components/lib/react-router/Link";
import { Outlet } from "~/components/lib/react-router/Outlet";
import { successButton } from "~/constants/buttonColor";

const NestThreePage = () => {
  return (
    <>
      <Head title="nest three page" description="nest three page" />

      <main className="p-4 bg-slate-300">
        <h3>NestThree</h3>

        <div className="flex flex-wrap gap-4 py-4">
          <Link to="/nest-one/" className={successButton}>
            to /nest-one/
          </Link>
          <Link to="/nest-one/nest-two" className={successButton}>
            to /nest-one/nest-two
          </Link>
        </div>

        <Outlet />
      </main>
    </>
  );
};

export default NestThreePage;
