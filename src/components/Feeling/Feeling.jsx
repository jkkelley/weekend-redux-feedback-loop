import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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

function Feeling() {
  // Below allows us to use useStyles css above
  const classes = useStyles();
  // Need to hold our input locally in a state so we
  // can check the length and ensure we had an input.
  const [feelingInput, setFeelingInput] = useState("");
  // Default errorState set to false, if we trigger
  // a non-input, change the state to true. This triggers our
  // conditional rendering and displays a required input.
  const [errorState, setErrorState] = useState(false);
  // Bring in history to send ourselves to the next page
  const history = useHistory();
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFeelingInput(event.target.value);
    setErrorState(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Button clicked!");

    // To prevent a user from inputting an undefined value in
    // we ask that our feelingInput doesn't come back as an empty string
    if (feelingInput === "") {
      setErrorState(true);
    } else {
      setErrorState(false);
      dispatch({
        type: "ADD_FEELING",
        payload: { feeling: feelingInput, id: 1 },
      });
      history.push("/understanding");
    }
  };
  return (
    <>
      {!errorState ? (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Feeling?</InputLabel>
            <Select value={feelingInput} onChange={handleChange}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl className={classes.formControl} error>
            <InputLabel id="demo-simple-select-error-label">
              Feeling?
            </InputLabel>
            <Select value={feelingInput} onChange={handleChange}>
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
      <NavigateNextIcon onClick={handleSubmit} />
    </>
  );
}

export default Feeling;
