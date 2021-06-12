import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Comments() {
  const classes = useStyles();
  // Need to hold our input locally in a state so we
  // can check the length and ensure we had an input.
  const [commentsInput, setCommentsInput] = useState("");
  // Bring in history to send ourselves to the next page
  const history = useHistory();
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();

  //   const handleChange = (event) => {
  //     setCommentsInput(event.target.value);
  //   };
  console.log(commentsInput);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Button clicked!");

    // To prevent a user from inputting an undefined value in
    // we ask that our understandingInput doesn't come back as an empty string

    dispatch({
      type: "ADD_COMMENTS",
      payload: { comments: commentsInput },
    });
    console.log(commentsInput)
    history.push("/");
  };
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="standard-required"
          label="Comments?"
          onChange={(event) => setCommentsInput(event.target.value)}
        />
        <NavigateNextIcon onClick={handleSubmit} />
      </form>
    </>
  );
}

export default Comments;
