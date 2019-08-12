import { createStore, combineReducers, applyMiddleware } from "redux";
import commanReducer from "./reducers/commanReducer";

const myLogger = state => next => action => {
  console.log("Logged Action: ", action);
  next(action);
};

export default createStore(
  combineReducers({
    commanReducer
  }),
  {},
  applyMiddleware(myLogger)
);
