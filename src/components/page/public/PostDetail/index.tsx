import { Head } from "~/components/lib/react-helmet-async/Head";
import { PostDetail } from "~/components/page/public/PostDetail/PostDetail.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";

const PostDetailPage = () => {
  return (
    <ErrorBoundary>
      <Head title="post detail page" description="post detail page" />
      <PostDetail />
    </ErrorBoundary>
  );
};

export default PostDetailPage;
