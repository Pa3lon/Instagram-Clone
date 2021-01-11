import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import { auth, db } from "./firebase";

function App() {
  const [posts, setPosts] = useState<any[]>([]);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app-header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          className="app-headerImage"
          alt="logo"
        />
      </div>
      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (
        <div className="signed-out">
          <Button onClick={() => setSignInOpen(true)}>Login</Button>
          <Button onClick={() => setRegistrationOpen(true)}>Sign up</Button>
        </div>
      )}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
      <SignUp
        open={registrationOpen}
        closeModal={() => setRegistrationOpen(false)}
      />
      <Signin open={signInOpen} closeModal={() => setSignInOpen(false)} />
    </div>
  );
}

export default App;
