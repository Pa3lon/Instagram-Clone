import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";
import IPost from "./interfaces/IPost";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    // API CALL
    setPosts([
      {
        username: "Bob 1",
        caption: "Hello world",
        imageUrl: "https://reactjs.org/logo-og.png",
      },
    ]);
  });

  return (
    <div className="app">
      <div className="app-header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          className="app-headerImage"
          alt="logo"
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
