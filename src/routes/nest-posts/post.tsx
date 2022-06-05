import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { successButton } from "~/constants/buttonColor";

interface PostDetail {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchPost = async (postId: string): Promise<PostDetail> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const posts = await res.json();
  return posts;
};

export const NestPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostDetail | null>(null);

  useEffect(() => {
    (async () => {
      if (!postId) return;
      const response = await fetchPost(postId);
      setPost(response);
    })();
  }, [postId]);

  return (
    <main className="bg-slate-500 p-4">
      <div className="flex gap-4 py-4">
        <Link to="/posts" className={successButton}>
          to /posts
        </Link>
      </div>
      <h2>PostPage{postId}</h2>
      <p>postId : {post?.id}</p>
      <p>title : {post?.title}</p>
      <p>body : {post?.body}</p>
      <p>userId : {post?.userId}</p>
    </main>
  );
};
