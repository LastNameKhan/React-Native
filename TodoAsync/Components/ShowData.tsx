import React from 'react';
import {Text, View} from 'react-native/types';

interface IProps {}

interface IState {}

class ShowData extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Show Data</Text>
      </View>
    );
  }
}

export default ShowData;
