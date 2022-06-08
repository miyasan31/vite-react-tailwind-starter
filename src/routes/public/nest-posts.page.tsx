import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { NestPostComponent } from "~/components/model/post/NestPostComponent";
import { Indicator } from "~/components/shared/Indicator";

export const NestPostsPage = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <p className="text-rose-500">Oops, something went wrong</p>}>
      <Suspense fallback={<Indicator />}>
        <NestPostComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
