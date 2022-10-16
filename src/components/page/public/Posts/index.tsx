import { Head } from "~/components/lib/react-helmet-async/Head";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";

import { Posts } from "./Posts.page";

const PostsPage = () => {
  return (
    <ErrorBoundary>
      <Head title="posts page" description="posts page" />
      <Posts />
    </ErrorBoundary>
  );
};

export default PostsPage;
