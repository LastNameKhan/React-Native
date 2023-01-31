import React from 'react';
import {Text, View} from 'react-native';

interface IProps {}

interface IState {}

class AddItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Add Item</Text>
      </View>
    );
  }
}

export default AddItem;
