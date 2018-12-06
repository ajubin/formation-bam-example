// @flow

import { AppNavigator } from 'formationbam/src/RootNavigation';
import {
  reduxifyNavigator,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const initialNavState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('home'),
);

export const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export const navListenerCreator = reduxifyNavigator(AppNavigator, 'root');
