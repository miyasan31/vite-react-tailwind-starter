import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { NestPostComponent } from "~/components/nest-posts/NestPostComponent";

export const NestPosts = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <p className="text-rose-500">Oops, something went wrong</p>}>
      <Suspense fallback={<p className="text-white">NestPosts Loading...</p>}>
        <NestPostComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
