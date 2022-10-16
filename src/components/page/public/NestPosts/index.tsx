import { Head } from "~/components/lib/react-helmet-async/Head";
import { NestPosts } from "~/components/page/public/NestPosts/NestPosts.page";

const NestPostsPage = () => {
  return (
    <>
      <Head title="nest posts page" description="nest posts page" />
      <NestPosts />
    </>
  );
};

export default NestPostsPage;
