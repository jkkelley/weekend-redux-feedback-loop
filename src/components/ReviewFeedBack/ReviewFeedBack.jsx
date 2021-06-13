import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function ReviewFeedBack() {
  const classes = useStyles();
  const history = useHistory();

  const feedBackForm = useSelector((store) => store.feedBackForm);
  console.log(feedBackForm);
  // Bring in dispatch to send our input to our reducer
  const dispatch = useDispatch();

  const handleConformation = (event) => {
    event.preventDefault();
    console.log(`You clicked handleConformation button!`);
    // Get our data ready for POST
    const data = {
      feeling: feedBackForm[0].feeling,
      understanding: feedBackForm[1].understanding,
      support: feedBackForm[2].support,
      comments: feedBackForm[3].comments,
    };

    axios
      .post("/feedback", data)
      .then((response) => {
        console.log(`response`, response);
        // After comes back with their promise
        // head over to /success
        history.push("/success");
      })
      .catch((error) => {
        console.log(`Looks like we have a server Error: ${error}`);
      });
  };

  const handleBack = (event) => {
    event.preventDefault();
    console.log("clicked handleBack");
    dispatch({ type: "GO_BACK", payload: feedBackForm[3] });
    history.push("/comments");
  };
  console.log(feedBackForm[0]);
  return (
    <div className="review-container">
      <h2>Review Your Feedback</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Feeling</TableCell>
              <TableCell>Understanding</TableCell>
              <TableCell>Support</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>{feedBackForm[0].feeling}</TableCell>
            <TableCell>{feedBackForm[1].understanding}</TableCell>
            <TableCell>{feedBackForm[2].support}</TableCell>
            <TableCell>{feedBackForm[3].comments}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        className={classes.button}
        color="primary"
        onClick={handleConformation}
        variant="contained"
      >
        {" "}
        Confirm
      </Button>
      <Button
        className={classes.button}
        color="primary"
        onClick={handleBack}
        variant="contained"
      >
        {" "}
        Go back
      </Button>
    </div>
  );
}

export default ReviewFeedBack;
