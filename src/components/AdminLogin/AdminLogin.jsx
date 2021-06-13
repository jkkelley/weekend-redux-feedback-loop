import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

function AdminLogin() {
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();
  const passCheck = useSelector((store) => store.passCheck);
  const classes = useStyles();
  // Need a couple of TextField holding states
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("You clicked handleSubmit");

    dispatch({ type: "CHECK_THIS", payload: { login: login, pass: password } });
    console.log(passCheck)
   
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-required"
        label="Username"
        onChange={(event) => setLogin(event.target.value)}
        required
      />
      <TextField
        autoComplete="current-password"
        id="standard-password-input"
        label="Password"
        onChange={(event) => setPassword(event.target.value)}
        required
        type="password"
      />
      <Button
        type="submit"
        className={classes.button}
        color="primary"
        variant="contained"
      >
        {" "}
        Submit
      </Button>
    </form>
  );
}

export default AdminLogin;
