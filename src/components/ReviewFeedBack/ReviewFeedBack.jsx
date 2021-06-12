import { useSelector } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function ReviewFeedBack() {
  const feedBackForm = useSelector((store) => store.feedBackForm);
  console.log(feedBackForm);
  return (
    <>
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
    </>
  );
}

export default ReviewFeedBack;
