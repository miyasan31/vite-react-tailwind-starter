import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

interface PostDetail {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const NestPostDetailComponent = () => {
  const { postId } = useParams();
  const { data } = useQuery<PostDetail, Error>(
    ["getPost", { postId }],
    () => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json()),
    { suspense: false },
  );

  if (!data) return <p>No data</p>;

  return (
    <main className="bg-slate-500 p-4">
      <div className="flex gap-4 py-4">
        <Link to="/nest-posts" className={successButton}>
          to /nest-posts
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
