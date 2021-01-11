import { Button, Dialog, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./SignUp.css";

interface Props {
  open: boolean;
  closeModal: () => void;
}

const Signin = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
      .then((authUser) => {
        if (authUser) props.closeModal();
      });
  };

  return (
    <Dialog open={props.open}>
      <div className="register-header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>
      <div className="register-form" style={{ height: 80 }}>
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
        <Button color="primary" variant="contained" onClick={signin}>
          Sign up
        </Button>
      </div>
    </Dialog>
  );
};

export default Signin;
