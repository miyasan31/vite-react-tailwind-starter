import { Head } from "~/components/lib/react-helmet-async/Head";
import { NestPosts } from "~/components/page/public/NestPosts/NestPosts.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";

const NestPostsPage = () => {
  return (
    <ErrorBoundary>
      <Head title="nest posts page" description="nest posts page" />
      <NestPosts />
    </ErrorBoundary>
  );
};

export default NestPostsPage;
