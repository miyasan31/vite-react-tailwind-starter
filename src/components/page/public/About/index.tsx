import { Head } from "~/components/lib/react-helmet-async/Head";
import { About } from "~/components/page/public/About/About.page";

/**
 * @package
 */
const AboutPage = () => {
  return (
    <>
      <Head title="about page" description="about page" />
      <About />
    </>
  );
};

export default AboutPage;
