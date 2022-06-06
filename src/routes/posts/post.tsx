import { Suspense } from "react";

import { PostDetailComponent } from "~/components/posts/PostDetailComponent";

export const Post = () => {
  return (
    <Suspense fallback={<p className="text-white">Loading...</p>}>
      <PostDetailComponent />
    </Suspense>
  );
};
