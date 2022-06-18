import { useQuery } from "react-query";

import { Link } from "~/components/lib/Link";
import { Outlet } from "~/components/lib/Outlet";
import { successButton } from "~/constants/buttonColor";
import type { IPost } from "~/interfaces/IPost";

export const NestPost = () => {
  const { data } = useQuery<IPost[], Error>(
    ["getPostList"],
    () => fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
    { suspense: true },
  );

  if (!data) return null;

  return (
    <main className="bg-slate-700 p-4 text-white">
      <h2>NestPostsPage</h2>

      <div className="flex flex-wrap gap-4">
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
  );
};
