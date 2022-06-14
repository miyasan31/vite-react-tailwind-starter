import { NestPostDetail } from "~/components/model/post/NestPostDetail";
import { Head } from "~/components/shared/Head";

const NestPostDetailPage = () => {
  return (
    <>
      <Head title="nest post detail page" description="nest post detail page" />

      <NestPostDetail />
    </>
  );
};

export default NestPostDetailPage;
