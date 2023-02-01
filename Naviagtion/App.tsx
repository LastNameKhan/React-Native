/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import StackNavigation from './Navigation/StackNavigation';
import TabNavigation from './Navigation/TabNavigation';

interface IProps {}

interface IState {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
