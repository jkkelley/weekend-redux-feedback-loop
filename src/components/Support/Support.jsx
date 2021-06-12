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

function Support() {
  const feedBackForm = useSelector(store => store.feedBackForm)

  const classes = useStyles();
  // Need to hold our input locally in a state so we
  // can check the length and ensure we had an input.
  const [supportInput, setSupportInput] = useState("");
  // Bring in history to send ourselves to the next page
  const history = useHistory();
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSupportInput(event.target.value);
  };
  console.log(supportInput);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Button clicked!");

    // To prevent a user from inputting an undefined value in
    // we ask that our supportInput doesn't come back as an empty string
    if (supportInput === "") {
      history.push("/support");
    } else {
      dispatch({ type: "ADD_SUPPORT", payload: {support: supportInput, id: 3 }});
      history.push("/comments");
    }
  };

  const handleBack = (event) => {
    console.log("you clicked handleBack");
    dispatch({ type: "GO_BACK", payload: feedBackForm[1] });
    history.push("/understanding");
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Support?</InputLabel>
        <Select value={supportInput} onChange={handleChange}>
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

export default Support;
