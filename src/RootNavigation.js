// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import * as Pages from 'formationbam/src/pages';
import { reduxifyNavigation } from 'react-navigation-redux-helpers';
import { navListenerCreator } from './modules/Nav/module';

export const AppNavigator = createAppContainer(
  createStackNavigator({
    home: {
      screen: Pages.Home,
    },
  }),
);

class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
