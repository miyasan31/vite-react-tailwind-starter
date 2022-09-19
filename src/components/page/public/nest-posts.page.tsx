import { NestPost } from "~/components/feature/post/NestPost";
import { Head } from "~/components/lib/react-helmet-async/Head";

const NestPostsPage = () => {
  return (
    <>
      <Head title="nest posts page" description="nest posts page" />

      <NestPost />
    </>
  );
};

export default NestPostsPage;
