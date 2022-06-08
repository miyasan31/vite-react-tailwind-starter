import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { PostDetailComponent } from "~/components/model/post/PostDetailComponent";
import { Indicator } from "~/components/shared/Indicator";

export const PostDetailPage = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <p className="text-rose-500">Oops, something went wrong</p>}>
      <Suspense fallback={<Indicator />}>
        <PostDetailComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
