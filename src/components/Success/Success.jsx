import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Success.css"

import Button from "@material-ui/core/Button";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Success() {
  // Set useStyles to classes
  const classes = useStyles();
  // Bring in history to send ourselves to the Home page
  const history = useHistory();
  // Bring in dispatch to reset our state in our reducer
  const dispatch = useDispatch();

  const handleNewFeedback = (event) => {
    console.log("clicked handleNewFeedback");
    dispatch({ type: "RESET" });
    history.push("/");
  };
  return (
    <div className="success-container">
      <div className="success-page-container">
        <div className="feedback-success-message">
          <h3><ThumbUpIcon />  Feedback Success!</h3>
        </div>
        <div>
          <h3 id="thank-you">Thank You!</h3>
          <Button
            className={classes.button}
            color="primary"
            onClick={handleNewFeedback}
            variant="contained"
          >
            {" "}
            Leave New Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Success;
