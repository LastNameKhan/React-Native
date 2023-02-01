import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AddItem from './Components/AddItem';
import ShowData from './Components/ShowData';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

interface IProps {}

interface IState {}

const Stack = createNativeStackNavigator();

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddItem">
          <Stack.Screen name="AddItem" component={AddItem} />
          <Stack.Screen name="ShowData" component={ShowData} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
