import { Head } from "~/components/lib/react-helmet-async/Head";
import { PostDetail } from "~/components/page/public/PostDetail/PostDetail.page";

const PostDetailPage = () => {
  return (
    <>
      <Head title="post detail page" description="post detail page" />
      <PostDetail />
    </>
  );
};

export default PostDetailPage;
