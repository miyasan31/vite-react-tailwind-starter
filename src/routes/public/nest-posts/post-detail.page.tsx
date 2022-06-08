import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { NestPostDetailComponent } from "~/components/model/post/NestPostDetailComponent";
import { Indicator } from "~/components/shared/Indicator";

export const NestPostDetailPage = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <p className="text-rose-500">Oops, something went wrong</p>}>
      <Suspense fallback={<Indicator />}>
        <NestPostDetailComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
