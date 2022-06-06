import { Suspense } from "react";
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
  const { error, data } = useQuery<PostDetail, Error>(
    ["getPost", { postId }],
    () => fetch(`https://jsonplaceholder.typicode.com/postss/${postId}`).then((res) => res.json()),
    { suspense: false },
  );

  console.error(error);

  if (error) return <p>LAn error has occurred: {error.message}</p>;
  if (!data) return <p>No data</p>;

  return (
    <Suspense fallback={<p className="text-white">NestPost Loading...</p>}>
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
    </Suspense>
  );
};
