import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import "../Feeling/Feeling.css";

import "./Comments.css";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),

    },
  },
}));

function Comments() {
  const feedBackForm = useSelector((store) => store.feedBackForm);

  const classes = useStyles();
  // Need to hold our input locally in a state so we
  // can check the length and ensure we had an input.
  const [commentsInput, setCommentsInput] = useState("");
  // Bring in history to send ourselves to the next page
  const history = useHistory();
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Button clicked!");
    // Dispatch our info to our reducer
    dispatch({
      type: "ADD_COMMENTS",
      payload: { comments: commentsInput, id: 4 },
    });
    history.push("/review");
  };

  const handleBack = (event) => {
    console.log("you clicked handleBack");
    dispatch({ type: "GO_BACK", payload: feedBackForm[2] });
    history.push("/support");
  };
  return (
    <div className="feeling-container">
      <div className="form-container">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-read-only-input"
            label="Comments?"
            onChange={(event) => setCommentsInput(event.target.value)}
          />
          <NavigateBeforeIcon onClick={handleBack} />
          <NavigateNextIcon onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Comments;
