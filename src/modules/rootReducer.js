// @flow

import { combineReducers } from "redux";

import { appReducer } from "./App";

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
