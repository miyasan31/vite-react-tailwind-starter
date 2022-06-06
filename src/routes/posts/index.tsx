import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const Posts = () => {
  const { isLoading, error, data } = useQuery<Post[], Error>("getPostList", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>LAn error has occurred: {error.message}</p>;
  if (!data) return <p>No data</p>;

  return (
    <main className="bg-slate-700 p-4 text-white">
      <h2>PostsPage</h2>

      <div className="flex flex-1 flex-col gap-4 py-4">
        {data.map((post) => (
          <div key={post.id} className="flex flex-col">
            <h3>title : {post.title}</h3>
            <Link to={`/posts/${post.id}`} className={successButton}>
              to /posts/{post.id}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
