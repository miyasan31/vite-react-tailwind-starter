import { Link } from "~/components/lib/Link";
import { Head } from "~/components/shared/Head";
import { successButton } from "~/constants/buttonColor";

const NotFoundPage = () => {
  return (
    <>
      <Head title="not found page" description="not found page" />

      <main className="bg-red-600 p-4 text-white">
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
