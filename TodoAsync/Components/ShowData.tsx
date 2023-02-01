import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

interface IProps {}

interface IState {
  data: any;
}

class ShowData extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getData = async () => {
    const getData: any = await AsyncStorage.getItem('Local');
    const parsedData = JSON.parse(getData);
    // console.log(parsedData);
    this.setState({data: parsedData});
    console.log(this.state.data);
  };
  render() {
    return (
      <View>
        <Text>Show Data</Text>
        <Pressable onPress={this.getData}>
          <Text>Show Data from Local</Text>
        </Pressable>
        <FlatList
          data={this.state.data}
          keyExtractor={(item: any) => item.index}
          renderItem={({item}) => (
            <View style={styles.flatlistdiv}>
              <Text style={styles.flatlistin}>{item}</Text>
            </View>
          )}
          initialNumToRender={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlistdiv: {
    padding: 20,
    margin: 20,
    borderWidth: 5,
    borderColor: 'white',
  },
  verticaltext: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  flatlistin: {
    color: 'black',
    fontSize: 30,
  },
  hordiv: {
    padding: 5,
    margin: 20,
    color: 'white',
    fontSize: 30,
    borderColor: 'white',
    borderWidth: 1,
  },
  backgroundimage: {
    flex: 1,
    justifyContent: 'center',
    height: 800,
    width: 390,
  },
  endreachstyle: {
    color: 'white',
    fontSize: 30,
  },
});

export default ShowData;
