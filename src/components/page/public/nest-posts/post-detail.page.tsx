import { NestPostDetail } from "~/components/feature/post/NestPostDetail";
import { Head } from "~/components/lib/react-helmet-async/Head";

const NestPostDetailPage = () => {
  return (
    <>
      <Head title="nest post detail page" description="nest post detail page" />

      <NestPostDetail />
    </>
  );
};

export default NestPostDetailPage;
