import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Components/Home';
import List from '../Components/List';

interface IProps {}

interface IState {}

const Tab = createBottomTabNavigator();

class TabNavigation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
