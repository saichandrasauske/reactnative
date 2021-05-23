import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignInScreen from "./SigInScreen";
import SignUpScreen from "./SignUpScreen";


const Tab = createMaterialTopTabNavigator();

export default class HomeScreen extends Component {
  render() {
    return (
      <Tab.Navigator>
      <Tab.Screen name="SignUp" component={SignUpScreen} />
      <Tab.Screen name="SignIn" component={SignInScreen} />
      </Tab.Navigator>
    );
  }
}
