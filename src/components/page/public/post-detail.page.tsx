import { PostDetail } from "~/components/model/post/PostDetail";
import { Head } from "~/components/shared/Head";

const PostDetailPage = () => {
  return (
    <>
      <Head title="post detail page" description="post detail page" />

      <PostDetail />
    </>
  );
};

export default PostDetailPage;
