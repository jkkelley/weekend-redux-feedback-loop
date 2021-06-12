import axios from "axios";
import { useState, useEffect } from "react";

// Material-ui imports
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function AdminOnly() {
  const [results, setResults] = useState([]);
  // need an axios GET promise
  const pastFeedbackResults = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(response.data);
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
        pastFeedbackResults();
      })
      .catch((error) => {
        console.log(`Sorry, couldn't handle the delete request: ${error}`);
      });
  };
  // display GET to table
  useEffect(() => {
    pastFeedbackResults();
  }, []);
  return (
    <>
      <h2>Feedback Results!</h2>
      <div className="feedback-results-table-container">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Feeling</TableCell>
                <TableCell>Comprehension</TableCell>
                <TableCell>Support</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((feedback, i) => (
                <TableRow key={i}>
                  <TableCell>{feedback.feeling}</TableCell>
                  <TableCell>{feedback.understanding}</TableCell>
                  <TableCell>{feedback.support}</TableCell>
                  <TableCell>{feedback.comments}</TableCell>
                  <TableCell>
                    <DeleteForeverIcon onClick={() => handleDelete(feedback)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default AdminOnly;
