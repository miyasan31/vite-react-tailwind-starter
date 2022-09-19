import { Head } from "~/components/lib/react-helmet-async/Head";
import { Link } from "~/components/lib/react-router/Link";
import { successButton } from "~/constants/buttonColor";

const AboutPage = () => {
  return (
    <>
      <Head title="about page" description="about page" />

      <main className="p-4 bg-slate-700">
        <h1 className="text-white">AboutPage</h1>

        <div className="flex py-4">
          <Link to="/" className={successButton}>
            to /
          </Link>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
