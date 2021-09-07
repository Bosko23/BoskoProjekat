//* eslint-disable prettier/prettier */
import React from 'react';
import Vehicle from './src/scenes/driver/Vehicle.js';
import Login from './src/scenes/login/Login.js';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Route from './src/scenes/driver/Route.js';
import List from './src/scenes/driver/List.js';

/*    export default class App extends React.Component {
  render() {
    return <List/>;
  }
}     */
const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Vehicle: Vehicle,
    Route: Route,
    List: List,
  },
  {
    initialRouteParams: 'Login',
    defaultNavigationOptions: {
      title: 'App',
      headerShown: false,
    },
  },
);

export default createAppContainer(AppNavigator);
