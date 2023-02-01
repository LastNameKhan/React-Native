import React from 'react';
import {Text, View} from 'react-native';

interface IProps {}

interface IState {}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
