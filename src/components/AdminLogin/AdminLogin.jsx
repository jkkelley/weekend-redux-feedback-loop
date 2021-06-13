import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./AdminLogin.css";
// Material-ui imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
  const [errors, setErrors] = useState();
  // Need a couple of TextField holding states
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("You clicked handleSubmit");

    dispatch({ type: "CHECK_THIS", payload: { login: login, pass: password } });
    setErrors(true);
  };

  return (
    <div className="admin-form-inputs-container">
      {errors ? (
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            error
            id="standard-error"
            label="Error"
            onChange={(event) => setLogin(event.target.value)}
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            helperText="Incorrect entry."
            onChange={(event) => setPassword(event.target.value)}
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
      ) : (
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
      )}
    </div>
  );
}

export default AdminLogin;
