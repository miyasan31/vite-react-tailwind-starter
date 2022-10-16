import { Head } from "~/components/lib/react-helmet-async/Head";
import { NestThree } from "~/components/page/public/NestThree/NestThree.page";

const NestThreePage = () => {
  return (
    <>
      <Head title="nest three page" description="nest three page" />
      <NestThree />
    </>
  );
};

export default NestThreePage;
