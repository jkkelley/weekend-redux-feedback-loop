const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Post our Feedback to Database
router.post("/", (req, res) => {
  // De-structure keys from the body
  const { feeling, understanding, support, comments } = req.body;
  // Query to insert data
  const queryText = `
    INSERT INTO "feedback" (feeling, understanding, support, comments, flagged)
    VALUES
        ($1, $2, $3, $4, $5);
  `;
  // Package our results up and get them ready for the Database.
  const values = [feeling, understanding, support, comments];

  // Let's go for a swim to the database
  pool
    .query(queryText, values)
    .then((result) => {
      // Send back a fulfilled code
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Hey Bob go get the Hammer, we got an... ${error}`);
    });
});

module.exports = router;
