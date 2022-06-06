import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "~/components/Layout";
import { Root } from "~/routes";
import { NotFound } from "~/routes/404";
import { About } from "~/routes/about";
import { NestOne } from "~/routes/nest-one";
import { NestOneAbout } from "~/routes/nest-one/about";
import { NestTwo } from "~/routes/nest-one/nest-two";
import { NestTwoAbout } from "~/routes/nest-one/nest-two/about";
import { NestThree } from "~/routes/nest-one/nest-two/nest-three";
import { NestThreeAbout } from "~/routes/nest-one/nest-two/nest-three/about";
import { NestPosts } from "~/routes/nest-posts";
import { NestPost } from "~/routes/nest-posts/post";
import { Posts } from "~/routes/posts";
import { Post } from "~/routes/posts/post";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="nest-one" element={<NestOne />}>
              <Route path="nest-two" element={<NestTwo />}>
                <Route path="nest-three" element={<NestThree />} />
                <Route path="nest-three-about" element={<NestThreeAbout />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="nest-two-about" element={<NestTwoAbout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="nest-one-about" element={<NestOneAbout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/about" element={<About />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />

          <Route path="/nest-posts" element={<NestPosts />}>
            <Route path=":postId" element={<NestPost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
