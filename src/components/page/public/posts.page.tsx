import { Post } from "~/components/model/post/Post";
import { Head } from "~/components/shared/Head";

const PostListPage = () => {
  return (
    <>
      <Head title="posts page" description="posts page" />

      <Post />
    </>
  );
};

export default PostListPage;
