import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/post";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((body) => setPosts(body.data))
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <section>
      <h2>📋 모든 게시글</h2>
      {err && <p className="error">불러오기 실패: {err}</p>}
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
    </section>
  );
}
