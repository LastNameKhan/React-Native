import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import TabNavigation from './TabNavigation';
import Drawernavigation from './Drawernavigation';

interface IProps {}

interface IState {}

const Stack = createNativeStackNavigator();

class StackNavigation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigation;
