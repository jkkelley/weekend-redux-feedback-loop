import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import "../Feeling/Feeling.css";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Support() {
  // Bring the store in.
  const feedBackForm = useSelector((store) => store.feedBackForm);
  // Below allows us to use useStyles from above
  const classes = useStyles();
  // Need to hold our input locally in a state so we
  // can check the length and ensure we had an input.
  const [supportInput, setSupportInput] = useState("");
  // Default errorState set to false, if we trigger
  // a non-input, change the state to true. This triggers our
  // conditional rendering and displays a required input.
  const [errorState, setErrorState] = useState(false);
  // Bring in history to send ourselves to the next page
  const history = useHistory();
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSupportInput(event.target.value);
    setErrorState(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Button clicked!");

    // To prevent a user from inputting an undefined value in
    // we ask that our supportInput doesn't come back as an empty string
    if (supportInput === "") {
      setErrorState(true);
    } else {
      setErrorState(false);
      dispatch({
        type: "ADD_SUPPORT",
        payload: { support: supportInput, id: 3 },
      });
      history.push("/comments");
    }
  };

  const handleBack = (event) => {
    console.log("you clicked handleBack");
    dispatch({ type: "GO_BACK", payload: feedBackForm[1] });
    history.push("/understanding");
  };
  return (
    <div className="feeling-container">
      {!errorState ? (
        <FormControl className={classes.formControl} required>
          <InputLabel id="demo-simple-select-label">Support?</InputLabel>
          <Select value={supportInput} onChange={handleChange}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </FormControl>
      ) : (
        <>
          <FormControl className={classes.formControl} error>
            <InputLabel id="demo-simple-select-error-label">
              Support?
            </InputLabel>
            <Select value={supportInput} onChange={handleChange}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </>
      )}
      <NavigateBeforeIcon onClick={handleBack} />
      <NavigateNextIcon onClick={handleSubmit} />
    </div>
  );
}

export default Support;
