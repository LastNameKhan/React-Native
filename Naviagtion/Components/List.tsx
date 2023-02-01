import React from 'react';
import {Text, View} from 'react-native';

interface IProps {}

interface IState {}

class List extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>List</Text>
      </View>
    );
  }
}

export default List;
