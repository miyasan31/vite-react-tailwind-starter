import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { PostComponent } from "~/components/posts/PostComponent";

export const Posts = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <p className="text-rose-500">Oops, something went wrong</p>}>
      <Suspense fallback={<p className="text-white">Post Loading...</p>}>
        <PostComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
