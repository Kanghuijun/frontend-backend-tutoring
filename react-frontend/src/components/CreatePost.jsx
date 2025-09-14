import React, { useState } from "react";

const API_URL = "http://localhost:3000/post";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    setErr("");
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })
      .then((res) => res.json())
      .then((body) => {
        alert(body.message || "게시글이 생성되었습니다.");
        setTitle("");
        setContent("");
      })
      .catch((e) => setErr(e.message));
  };

  return (
    <section>
      <h2>✏️ 게시글 추가</h2>
      {err && <p className="error">생성 실패: {err}</p>}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      />
      <button onClick={handleSubmit}>추가</button>
    </section>
  );
}
