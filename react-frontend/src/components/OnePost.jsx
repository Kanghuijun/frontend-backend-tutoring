import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/post";

export default function OnePost({ postId }) {
  const [post, setPost] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/${postId}`)
      .then((res) => res.json())
      .then((body) => setPost(body.data))
      .catch((e) => setErr(e.message));
  }, [postId]);

  if (err) return <p className="error">상세 조회 실패: {err}</p>;
  if (!post) return <p className="muted">로딩 중...</p>;

  return (
    <section>
      <h2>📌 게시글 상세</h2>
      <article className="post-card">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </article>
    </section>
  );
}
