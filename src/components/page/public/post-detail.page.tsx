import { PostDetail } from "~/components/feature/post/PostDetail";
import { Head } from "~/components/lib/react-helmet-async/Head";

const PostDetailPage = () => {
  return (
    <>
      <Head title="post detail page" description="post detail page" />

      <PostDetail />
    </>
  );
};

export default PostDetailPage;
