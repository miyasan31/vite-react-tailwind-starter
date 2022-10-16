import { Head } from "~/components/lib/react-helmet-async/Head";
import { Main } from "~/components/page/private/Main/main.page";

const MainPage = () => {
  return (
    <>
      <Head title="main page" description="main page" />
      <Main />
    </>
  );
};

export default MainPage;
