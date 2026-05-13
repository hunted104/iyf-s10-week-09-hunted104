import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 80)}...</p>
      <Link to={`/posts/${post.id}`}>Read More</Link>
    </div>
  );
}
