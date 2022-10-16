import { Head } from "~/components/lib/react-helmet-async/Head";
import { NestPostDetail } from "~/components/page/public/NestPostDetail/NestPostDetail.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";

const NestPostDetailPage = () => {
  return (
    <ErrorBoundary>
      <Head title="nest post detail page" description="nest post detail page" />
      <NestPostDetail />
    </ErrorBoundary>
  );
};

export default NestPostDetailPage;
