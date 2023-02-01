import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Home from '../Components/Home';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';
import SignUp from '../Components/SignUp';

interface IProps {}

interface IState {}

const Drawer = createDrawerNavigator();

class Drawernavigation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="AboutUs" component={AboutUs} />
          <Drawer.Screen name="ContactUs" component={ContactUs} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Drawernavigation;
