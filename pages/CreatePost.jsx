import { useState } from "react";
import Input from "../components/common/Input";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !body) return;

    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setBody("");
  }

  return (
    <div>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Add Post</button>
      </form>

      <h3>Local Posts</h3>
      {posts.map(p => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
