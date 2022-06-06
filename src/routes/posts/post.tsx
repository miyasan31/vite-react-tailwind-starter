import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

interface PostDetail {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const Post = () => {
  const { postId } = useParams();
  const { isLoading, error, data } = useQuery<PostDetail, Error>(`getPostById${postId}`, () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json()),
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>LAn error has occurred: {error.message}</p>;
  if (!data) return <p>No data</p>;

  return (
    <main className="bg-slate-500 p-4">
      <div className="flex gap-4 py-4">
        <Link to="/posts" className={successButton}>
          to /posts
        </Link>
      </div>

      <h2>PostPage{postId}</h2>
      <p>postId : {data.id}</p>
      <p>title : {data.title}</p>
      <p>body : {data.body}</p>
      <p>userId : {data.userId}</p>
    </main>
  );
};
