import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface IProps {
  navigation?: any;
}

interface IState {
  task: string;
  data: any;
  localdata: any;
}

class AddItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      task: '',
      data: [],
      localdata: [],
    };
  }

  handleadd = async () => {
    try {
      this.setState({data: [...this.state.data, this.state.task]});
      await AsyncStorage.setItem('Local', JSON.stringify(this.state.data));
    } catch (e) {
      console.log(e);
    }
  };

  handleshow = () => {
    this.props.navigation.navigate('ShowData');
  };
  render() {
    return (
      <View style={styles.maincontainer}>
        <Text>Add Item</Text>
        <TextInput
          style={styles.additemtextinput}
          placeholder="Add Task Here"
          onChangeText={(e: any) => this.setState({task: e})}
        />
        <Pressable onPress={this.handleadd}>
          <Text style={styles.submitbutton}>Submit</Text>
        </Pressable>
        <Pressable onPress={this.handleshow}>
          <Text style={styles.submitbutton}>Show Task</Text>
        </Pressable>
        <FlatList
          data={this.state.data}
          keyExtractor={(item: any) => item.index}
          //@ts-ignore
          renderItem={({item, index}: any) => {
            <View style={{borderWidth: 2, height: 400, width: 200}}>
              <Text>{item}</Text>
            </View>;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    alignItems: 'center',
    padding: 20,
  },
  additemtextinput: {
    fontSize: 23,
    textAlign: 'center',
    borderBottomWidth: 3,
    margin: 20,
  },
  submitbutton: {
    fontSize: 20,
    borderWidth: 2,
    height: 30,
    width: 70,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default AddItem;
