import { Head } from "~/components/lib/react-helmet-async/Head";
import { NestOne } from "~/components/page/public/NestOne/NestOne.page";

const NestOnePage = () => {
  return (
    <>
      <Head title="nest one page" description="nest one page" />
      <NestOne />
    </>
  );
};

export default NestOnePage;
