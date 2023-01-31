import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AddItem from './Components/AddItem';

interface IProps {}

interface IState {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <AddItem />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
