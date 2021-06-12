import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

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
    <>
      <div className="success-page-container">
        <div>
          <h3>Feedback!</h3>
        </div>
        <div>
          <h3>Thank You!</h3>
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
    </>
  );
}

export default Success;
