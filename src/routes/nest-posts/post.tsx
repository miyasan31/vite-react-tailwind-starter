import { Suspense } from "react";

import { NestPostDetailComponent } from "~/components/nest-posts/NestPostDetailComponent";

export const NestPost = () => {
  return (
    <Suspense fallback={<p className="text-white">NestPost Loading...</p>}>
      <NestPostDetailComponent />
    </Suspense>
  );
};
