import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          cover={post.cover}
          id={post.id}
          body={post.body}
        />
      ))}
    </div>
  );
};
