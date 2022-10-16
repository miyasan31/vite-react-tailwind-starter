import { Head } from "~/components/lib/react-helmet-async/Head";
import { NestTwo } from "~/components/page/public/NestTwo/NestTwo.page";

const NestTwoPage = () => {
  return (
    <>
      <Head title="nest two page" description="nest two page" />
      <NestTwo />
    </>
  );
};

export default NestTwoPage;
