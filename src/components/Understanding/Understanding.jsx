import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


// Material UI
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
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

function Understanding() {
  const feedBackForm = useSelector(store => store.feedBackForm)
  // console.log(feedBackForm[0].id)
  const classes = useStyles();
  // Need to hold our input locally in a state so we
  // can check the length and ensure we had an input.
  const [understandingInput, setUnderstandingInput] = useState("");
  // Bring in history to send ourselves to the next page
  const history = useHistory();
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUnderstandingInput(event.target.value);
  };
  console.log(understandingInput);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Button clicked!");

    // To prevent a user from inputting an undefined value in
    // we ask that our understandingInput doesn't come back as an empty string
    if (understandingInput === "") {
      history.push("/understanding");
    } else {
      dispatch({
        type: "ADD_UNDERSTANDING",
        payload: {understanding: understandingInput, id: 2}
      });
      history.push("/support");
    }
  };

  const handleBack = (event) => {
    console.log("you clicked handleBack");
    dispatch({type: "GO_BACK", payload: feedBackForm[0] })
    history.push("/")
  };
  return (
    <>
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
      <NavigateBeforeIcon onClick={handleBack} />
      <NavigateNextIcon onClick={handleSubmit} />
    </>
  );
}

export default Understanding;
