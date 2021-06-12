import axios from "axios";
import { useEffect } from "react";

function AdminOnly() {
    // need an axios GET promise
    // need a axios DELETE promise
    // display GET to table
  return (
    <>
      <h2>Feedback Results!</h2>
      <div className="feedback-results-table-container">
        <p>TABLE HERE!</p>
      </div>
    </>
  );
}

export default AdminOnly;
