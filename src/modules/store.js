// @flow

import { createStore } from "redux";
import reducers from "formationbam/src/modules/rootReducer";

export default () => createStore(reducers);
