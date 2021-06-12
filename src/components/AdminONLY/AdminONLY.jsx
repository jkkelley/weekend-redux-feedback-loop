import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import AdminOnlyItem from "../AdminONLYitem/AdminONLYitem";

// Material-ui imports
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FlagIcon from "@material-ui/icons/Flag";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
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

function AdminOnly() {
  const classes = useStyles();

  // Create login to display feedback Results
  const history = useHistory();
  const [results, setResults] = useState([]);
  // need an axios GET promise
  const pastFeedbackResults = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(response.data);
        // for (let flags of response.data) {
        //   setFlagged(flags.flagged);
        // }
        // setFlagged(response.data[0].flagged);
        setResults(response.data);
      })
      .catch((error) => {
        console.log(`Seems like the server had an ${error}`);
      });
  };
  // need a axios DELETE promise
  const handleDelete = (feedback) => {
    console.log("you clicked handleDelete");
    console.log(feedback);
    axios
      .delete(`/feedback/${feedback.id}`)
      .then((response) => {
        console.log(`The Server says... ${response.data}`);
        // Redraw the table
        // pastFeedbackResults();
      })
      .catch((error) => {
        console.log(`Sorry, couldn't handle the delete request: ${error}`);
      });
  };

  const goHome = () => {
    history.push("/");
  };
  // display GET to table
  useEffect(() => {
    pastFeedbackResults();
  }, []);

  return (
    <>
      <h2>Feedback Results!</h2>
      <Button
        className={classes.button}
        color="primary"
        onClick={goHome}
        variant="contained"
      >
        {" "}
        Go Home
      </Button>
      <div className="feedback-results-table-container">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Flag</TableCell>
                <TableCell>Feeling</TableCell>
                <TableCell>Comprehension</TableCell>
                <TableCell>Support</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((feedback, i) => (
                <AdminOnlyItem
                  value={i}
                  feedback={feedback}
                  pastFeedbackResults={pastFeedbackResults}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default AdminOnly;
