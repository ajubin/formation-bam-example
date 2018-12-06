// @flow

import { createStore } from 'redux';
import enhancer from 'formationbam/src/modules/rootEnhancer';
import reducers from 'formationbam/src/modules/rootReducer';

export default () => createStore(reducers, enhancer);
