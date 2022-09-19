import { Head } from "~/components/lib/react-helmet-async/Head";

const AboutPage = () => {
  return (
    <>
      <Head title="nest about page" description="nest about page" />

      <main className="p-4 bg-blue-300">
        <h3>NestTwoAboutPage</h3>
      </main>
    </>
  );
};

export default AboutPage;
