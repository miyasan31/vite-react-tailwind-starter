import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { PostDetailComponent } from "~/components/posts/PostDetailComponent";

export const Post = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <p className="text-rose-500">Oops, something went wrong</p>}>
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <PostDetailComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
