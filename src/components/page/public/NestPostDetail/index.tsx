import { Head } from "~/components/lib/react-helmet-async/Head";
import { NestPostDetail } from "~/components/page/public/NestPostDetail/NestPostDetail.page";

const NestPostDetailPage = () => {
  return (
    <>
      <Head title="nest post detail page" description="nest post detail page" />
      <NestPostDetail />
    </>
  );
};

export default NestPostDetailPage;
