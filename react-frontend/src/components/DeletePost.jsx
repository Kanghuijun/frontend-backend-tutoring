import React, { useState } from "react";

const API_URL = "http://localhost:3000/post";

export default function DeletePost({ postId }) {
  const [err, setErr] = useState("");

  const handleDelete = () => {
    setErr("");
    fetch(`${API_URL}/${postId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((body) => {
        alert(body.message || `ID ${postId} 삭제 완료`);
      })
      .catch((e) => setErr(e.message));
  };

  return (
    <section>
      <h2>🗑 게시글 삭제</h2>
      {err && <p className="error">삭제 실패: {err}</p>}
      <button onClick={handleDelete}>ID {postId} 삭제</button>
    </section>
  );
}
