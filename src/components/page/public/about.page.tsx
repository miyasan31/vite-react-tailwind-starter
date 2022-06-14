import { Link } from "~/components/lib/Link";
import { Head } from "~/components/shared/Head";
import { successButton } from "~/constants/buttonColor";

const AboutPage = () => {
  return (
    <>
      <Head title="about page" description="about page" />

      <main className="bg-slate-700 p-4">
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
