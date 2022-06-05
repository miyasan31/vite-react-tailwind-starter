import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

export const NestPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetchPosts();
      setPosts(response);
    })();
  }, []);

  return (
    <main className="bg-slate-700 p-4 text-white">
      <h2>NestPostsPage</h2>

      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-4 py-4">
          {posts.map((post) => (
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
