import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// ⬇ What we need to import
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// ⬇ The Reducers
const feedBackForm = (state = [], action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return [...state, action.payload];
    case "ADD_UNDERSTANDING":
      return [...state, action.payload];
    case "ADD_SUPPORT":
      return [...state, action.payload];
    case "ADD_COMMENTS":
      return [...state, action.payload];
    case "GO_BACK":
      const matched = (submission) => submission.id !== action.payload.id;
      return state.filter(matched);
    case "RESET":
      return [];
    default:
      return state;
  }
};
// ⬇ Creating our store
const store = createStore(
  // ⬇ Reducers go here
  combineReducers({
    feedBackForm,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
