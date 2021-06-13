import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Understanding.css";

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
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Understanding() {
  // Bring the store in.
  const feedBackForm = useSelector((store) => store.feedBackForm);
  // Below allows us to use useStyles from above
  const classes = useStyles();
  // Need to hold our input locally in a state so we
  // can check the length and ensure we had an input.
  const [understandingInput, setUnderstandingInput] = useState("");
  // Default errorState set to false, if we trigger
  // a non-input, change the state to true. This triggers our
  // conditional rendering and displays a required input.
  const [errorState, setErrorState] = useState(false);
  // Bring in history to send ourselves to the next page
  const history = useHistory();
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUnderstandingInput(event.target.value);
    setErrorState(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Button clicked!");

    // To prevent a user from inputting an undefined value in
    // we ask that our understandingInput doesn't come back as an empty string
    if (understandingInput === "") {
      setErrorState(true);
    } else {
      setErrorState(false);
      dispatch({
        type: "ADD_UNDERSTANDING",
        payload: { understanding: understandingInput, id: 2 },
      });
      history.push("/support");
    }
  };

  const handleBack = (event) => {
    console.log("you clicked handleBack");
    dispatch({ type: "GO_BACK", payload: feedBackForm[0] });
    history.push("/");
  };
  return (
    <>
      {!errorState ? (
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Understanding?</InputLabel>
          <Select value={understandingInput} onChange={handleChange}>
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
              Understanding?
            </InputLabel>
            <Select value={understandingInput} onChange={handleChange}>
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
    </>
  );
}

export default Understanding;
