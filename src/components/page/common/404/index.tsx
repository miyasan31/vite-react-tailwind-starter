import { Head } from "~/components/lib/react-helmet-async/Head";
import { NotFound } from "~/components/page/common/404/404.page";

const NotFoundPage = () => {
  return (
    <>
      <Head title="404 not found" description="404 not found" />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
