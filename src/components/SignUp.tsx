import { Button, Dialog, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./SignUp.css";

interface Props {
  open: boolean;
  closeModal: () => void;
}

const SignUp = (props: Props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user?.updateProfile({
          displayName: username,
        });
        props.closeModal();
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Dialog open={props.open}>
      <div className="register-header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>
      <div className="register-form">
        <TextField
          className="register-form-items"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="register-form-items"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="register-items"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="register-submit">
        <Button color="primary" variant="contained" onClick={signUp}>
          Sign up
        </Button>
      </div>
    </Dialog>
  );
};

export default SignUp;
