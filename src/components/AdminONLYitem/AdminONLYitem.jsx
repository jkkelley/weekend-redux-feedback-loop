import axios from "axios";

import { useState} from "react";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FlagIcon from "@material-ui/icons/Flag";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import TableCell from "@material-ui/core/TableCell";


function AdminOnlyItem({ feedback, pastFeedbackResults }) {
  const [flagged, setFlagged] = useState(feedback.flagged);

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

  return (
    <>
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
    </>
  );
}

export default AdminOnlyItem;
