const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Post our Feedback to Database
router.post("/", (req, res) => {
  // De-structure keys from the body
  const { feeling, understanding, support, comments } = req.body;
  // Query to insert data
  const queryText = `
    INSERT INTO "feedback" (feeling, understanding, support, comments)
    VALUES
        ($1, $2, $3, $4);
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

// GET some of that delicious data for our Admin
router.get("/", (req, res) => {
  // Bring me all of the Feedback results from DB
  pool
    .query(`SELECT * FROM "feedback";`)
    .then((result) => {
      // Send back all the rows
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Hey Capt., Seems we're lost in space... ${error}`);
      res.sendStatus(500);
    });
});

// DELETE -- Tell goodbye on the way out!
router.delete("/:id", (req, res) => {
  const feedbackToDelete = [req.params.id];
  // Have them wash their hands
  const queryText = `
    DELETE FROM "feedback" WHERE "id" = $1;
  `;
  // Let's take a dip, hope the water isn't cold...
  pool
    .query(queryText, feedbackToDelete)
    .then((result) => {
      // Send them back an OK
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Server is on the fritz... ${error}`);
    });
});

module.exports = router;
