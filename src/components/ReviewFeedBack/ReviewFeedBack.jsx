import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import axios from "axios";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
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

  const feedBackForm = useSelector((store) => store.feedBackForm);
  console.log(feedBackForm);

  const handleConformation = (event) => {
    event.preventDefault();
    console.log(`You clicked handleConformation button!`);
    // Get our data ready for POST
    const data = {
      feeling: feedBackForm[0],
      understanding: feedBackForm[1],
      support: feedBackForm[2],
      comments: feedBackForm[3],
    };

    axios
      .post("/feedback", data)
      .then((response) => {
        console.log(`response`, response);
      })
      .catch((error) => {
        console.log(`Looks like we have a server Error: ${error}`);
      });
  };
  return (
    <>
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
            <TableCell>{feedBackForm[0]}</TableCell>
            <TableCell>{feedBackForm[1]}</TableCell>
            <TableCell>{feedBackForm[2]}</TableCell>
            <TableCell>{feedBackForm[3]}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        // endIcon={<Icon></Icon>}
        onClick={handleConformation}
      >
        {" "}
        Confirm
      </Button>
    </>
  );
}

export default ReviewFeedBack;
