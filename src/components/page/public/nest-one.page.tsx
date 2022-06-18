import { Link } from "~/components/lib/Link";
import { Outlet } from "~/components/lib/Outlet";
import { Head } from "~/components/shared/Head";
import { errorButton, successButton } from "~/constants/buttonColor";

const NestOnePage = () => {
  return (
    <>
      <Head title="nest one page" description="nest one page" />

      <main className="bg-slate-700 p-4">
        <h2 className="text-white">NestOne</h2>

        <div className="flex flex-wrap gap-4 py-4">
          <Link to="/nest-one/nest-two" className={successButton}>
            to /nest-one/nest-two
          </Link>
          <Link to="/nest-one/about" className={successButton}>
            to /nest-one/about
          </Link>
          <Link to="/nest-one/404-not-found" className={errorButton}>
            to /nest-one/404-not-found
          </Link>
        </div>

        <Outlet />
      </main>
    </>
  );
};

export default NestOnePage;
