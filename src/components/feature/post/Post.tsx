import { Link } from "~/components/lib/react-router/Link";
import { successButton } from "~/constants/buttonColor";
import { postService } from "~/services/post.service";

const { useGetPostList } = postService;

export const Post = () => {
  const { data } = useGetPostList();
  if (!data) return null;

  return (
    <main className="p-4 text-white bg-slate-700">
      <h2>PostsPage</h2>

      <div className="flex flex-col flex-1 gap-4 py-4">
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
