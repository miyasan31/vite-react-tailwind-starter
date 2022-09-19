import { Head } from "~/components/lib/react-helmet-async/Head";
import { Link } from "~/components/lib/react-router/Link";
import { Outlet } from "~/components/lib/react-router/Outlet";
import { errorButton, successButton } from "~/constants/buttonColor";

const NestTwoPage = () => {
  return (
    <>
      <Head title="nest two page" description="nest two page" />

      <main className="p-4 bg-slate-500">
        <h2 className="text-white">NestTwo</h2>

        <div className="flex flex-wrap gap-4 py-4">
          <Link to="/nest-one/nest-two/nest-three" className={successButton}>
            to /nest-one/nest-two/nest-three
          </Link>
          <Link to="/nest-one/nest-two/about" className={successButton}>
            to /nest-one/nest-two/about
          </Link>
          <Link to="/nest-one/nest-two/404-not-found" className={errorButton}>
            to /nest-one/nest-two/404-not-found
          </Link>
        </div>

        <Outlet />
      </main>
    </>
  );
};

export default NestTwoPage;
