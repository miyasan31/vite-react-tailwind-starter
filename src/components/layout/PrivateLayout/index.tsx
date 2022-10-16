import { Link } from "~/components/lib/router/Link";
import { Outlet } from "~/components/lib/router/Outlet";
import { Suspense } from "~/components/provider/Suspense";
import { errorButton, successButton } from "~/constants/buttonColor";

export const PrivateLayout = () => {
  return (
    <main className="p-4 h-full min-h-screen bg-slate-900">
      <div className="flex flex-wrap gap-4 pb-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
        <Link to="/nest-one" className={successButton}>
          to /nest-one
        </Link>
        <Link to="/about" className={successButton}>
          to /about
        </Link>
        <Link to="/posts" className={successButton}>
          to /posts
        </Link>
        <Link to="/nest-posts" className={successButton}>
          to /nest-posts
        </Link>
        <Link to="/not-found" className={errorButton}>
          to /not-found
        </Link>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
