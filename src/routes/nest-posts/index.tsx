import { Suspense } from "react";

import { NestPostComponent } from "~/components/nest-posts/NestPostComponent";

export const NestPosts = () => {
  return (
    <Suspense fallback={<p className="text-white">NestPosts Loading...</p>}>
      <NestPostComponent />
    </Suspense>
  );
};
