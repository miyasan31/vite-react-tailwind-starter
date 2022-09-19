import { Post } from "~/components/feature/post/Post";
import { Head } from "~/components/lib/react-helmet-async/Head";

const PostListPage = () => {
  return (
    <>
      <Head title="posts page" description="posts page" />

      <Post />
    </>
  );
};

export default PostListPage;
