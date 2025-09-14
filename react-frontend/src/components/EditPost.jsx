import React, { useState } from "react";

const API_URL = "http://localhost:3000/post";

export default function EditPost({ postId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [err, setErr] = useState("");

  const handleUpdate = () => {
    setErr("");
    fetch(`${API_URL}/${postId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })
      .then((res) => res.json())
      .then((body) => {
        alert(body.message || "게시글이 수정되었습니다.");
      })
      .catch((e) => setErr(e.message));
  };

  return (
    <section>
      <h2>🛠 게시글 수정</h2>
      {err && <p className="error">수정 실패: {err}</p>}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="새 제목"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새 내용"
      />
      <button onClick={handleUpdate}>수정</button>
    </section>
  );
}
