import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

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

function AdminOnlyItem({ feedback, value, pastFeedbackResults }) {
  const [flagged, setFlagged] = useState(feedback.flagged);
  //   const currentFlag = setFlagged(feedback.flagged);
  console.log(feedback.flagged);
  // Need to handle the flipped useState
  const handleFlip = (feedback) => {
    console.log("clicked handleFlip");
    if (flagged) {
      setFlagged(!flagged);

      let data = {
        flagged: !flagged,
      };
      axios
        .put(`/feedback/flagged/${feedback.id}`, data)
        .then((response) => {
          console.log(response);
          pastFeedbackResults();
        })
        .catch((error) => {
          console.log(`Uh No, we have a problem... ${error}`);
        });
    } else {
      setFlagged(!flagged);

      let data = {
        flagged: !flagged,
      };
      axios
        .put(`/feedback/flagged/${feedback.id}`, data)
        .then((response) => {
          console.log(response);
          pastFeedbackResults();
        })
        .catch((error) => {
          console.log(`Uh No, we have a problem... ${error}`);
        });
    }
  };


  return (
    <TableRow value={value}>
      <TableCell>
        {!flagged ? (
          <FlagOutlinedIcon onClick={() => handleFlip(feedback)} />
        ) : (
          <FlagIcon onClick={() => handleFlip(feedback)} />
        )}
      </TableCell>
      <TableCell>{feedback.feeling}</TableCell>
      <TableCell>{feedback.understanding}</TableCell>
      <TableCell>{feedback.support}</TableCell>
      <TableCell>{feedback.comments}</TableCell>
      <TableCell>
        <DeleteForeverIcon onClick={() => handleDelete(feedback)} />
      </TableCell>
    </TableRow>
  );
}

export default AdminOnlyItem;
