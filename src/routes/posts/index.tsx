import { Suspense } from "react";

import { PostComponent } from "~/components/posts/PostComponent";

export const Posts = () => {
  return (
    <Suspense fallback={<p className="text-white">Post Loading...</p>}>
      <PostComponent />
    </Suspense>
  );
};
