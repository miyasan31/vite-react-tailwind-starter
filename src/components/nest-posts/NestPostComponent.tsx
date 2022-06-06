import { Suspense } from "react";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const NestPostComponent = () => {
  const { error, data } = useQuery<Post[], Error>(
    ["getPostList"],
    () => fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
    { suspense: true },
  );

  if (error) return <p>LAn error has occurred: {error.message}</p>;
  if (!data) return <p>No data</p>;

  return (
    <Suspense fallback={<p className="text-white">NestPosts Loading...</p>}>
      <main className="bg-slate-700 p-4 text-white">
        <h2>NestPostsPage</h2>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-4 py-4">
            {data.map((post) => (
              <div key={post.id} className="flex flex-col">
                <h3>title : {post.title}</h3>
                <Link to={`/nest-posts/${post.id}`} className={successButton}>
                  to /nest-posts/{post.id}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </main>
    </Suspense>
  );
};
