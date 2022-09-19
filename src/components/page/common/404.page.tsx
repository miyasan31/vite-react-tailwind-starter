import { Head } from "~/components/lib/react-helmet-async/Head";
import { Link } from "~/components/lib/react-router/Link";
import { successButton } from "~/constants/buttonColor";

const NotFoundPage = () => {
  return (
    <>
      <Head title="not found page" description="not found page" />

      <main className="p-4 text-white bg-red-600">
        <h1>404 NotFound</h1>

        <div className="flex py-4">
          <Link to="/" className={successButton}>
            to /
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
