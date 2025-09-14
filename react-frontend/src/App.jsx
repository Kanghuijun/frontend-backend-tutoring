import React, { useState } from "react";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import "./App.css";

export default function App() {
  const [postId, setPostId] = useState(1);

  return (
    <div className="app-container">
      <h1>📝 게시판 튜터링 예제</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          조회/수정/삭제할 ID:{" "}
          <input
            type="number"
            value={postId}
            onChange={(e) => setPostId(Number(e.target.value))}
            style={{ width: "80px", marginLeft: "0.5rem" }}
          />
        </label>
      </div>

      <AllPosts />
      <hr />
      <OnePost postId={postId} />
      <hr />
      <CreatePost />
      <hr />
      <EditPost postId={postId} />
      <hr />
      <DeletePost postId={postId} />
    </div>
  );
}
