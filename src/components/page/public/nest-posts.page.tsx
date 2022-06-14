import { NestPost } from "~/components/model/post/NestPost";
import { Head } from "~/components/shared/Head";

const NestPostsPage = () => {
  return (
    <>
      <Head title="nest posts page" description="nest posts page" />

      <NestPost />
    </>
  );
};

export default NestPostsPage;
