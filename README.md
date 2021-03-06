# Feedback App

## Description

### IMPORTANT 
    - To login to the /admin page, you need this login info
    - username: Admin,
    - password: Qwerty123

Upon opening the app, the user arrives at the home page of the Feedback App. They are prompted with with how they are feeling. The user must enter from the selection
before moving on. After making a selection the user moves to the understanding page and are prompted with how Understanding of the material they feel. As before, the user makes a selection and moves onto the Support page where they are prompted with how Supported they feel. After the selection they move onto the comments page where they have the choice to leave a message or not before arriving at the review page.

Once the user is at the review page, they have the option to go back and change any of their selections from their previous choices. If they don't need to change any selection, they can Confirm their choice. The users data is now posted to the database where it can be accessed from the admin page. The user arrives at the Feedback Success page. They have the option to leave the page and start a New Feedback.

At any point before confirming your Feedback, the user has the ability to go back and change their selection. You must input a selection before moving onto the next page.

To see the fully functional site, please visit: [Feedback App](https://redux-feedback-review-loop.herokuapp.com/#/)

## Prerequisites

Link to software that is required to install the app.
* [Node.js](https://nodejs.org/)
* [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database in Postico named "prime_feedback"
2. The queries in the [data.sql] file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.

3. Open up your editor of choice and run "npm install" in the root directory of project
4. Run "npm run server" in the root directory of the project to get the server up and running.
5. Run "npm run client" in the root directory of the project to get the app up and running.

## Built with a ???? ???? 

List of technologies used
* [Node.js](https://nodejs.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Postico](https://eggerapps.at/postico/)
* [Reactjs](https://reactjs.org/)
* [Reduxjs](https://redux.js.org/)
* [Material-ui](https://material-ui.com/)
* [Express](https://expressjs.com/)