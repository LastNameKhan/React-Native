import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IProps {}

interface IState {}

class EmptyList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      //@ts-ignore
      <View style={styles.maindiv}>
        <Text style={styles.emptyText}>List is Empty, Nothing to Dispay</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maindiv: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'red',
    marginLeft: 25,
  },
  emptyText: {
    fontSize: 25,
    color: 'red',
  },
});

export default EmptyList;
