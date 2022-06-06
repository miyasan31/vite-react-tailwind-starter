import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { NestPostDetailComponent } from "~/components/nest-posts/NestPostDetailComponent";

export const NestPost = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <p className="text-rose-500">Oops, something went wrong</p>}>
      <Suspense fallback={<p className="text-white">NestPost Loading...</p>}>
        <NestPostDetailComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
