import React from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Data} from './Datajson';
import EmptyList from './EmptyList';

interface IProps {}

interface IState {
  data: any[];
}

class List extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(resJson => this.setState({data: resJson}));
    } catch (e: any) {
      Alert.alert('Oops Something went wrong', e);
    }
  }

  EndReach = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(resJson => this.setState({data: resJson}));
  };
  render() {
    return (
      <View>
        <ImageBackground
          style={styles.backgroundimage}
          source={{
            uri: 'https://preview.redd.it/5rqe904en2p81.png?width=640&crop=smart&auto=webp&s=3b33e9f33cf1106255213175de738cbc1d71c739',
          }}></ImageBackground>
        <Text style={styles.verticaltext}>Horizontal FlatList</Text>
        <FlatList
          data={Data}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => (
            //@ts-ignore
            <View style={styles.hordiv}>
              <Text style={styles.flatlistin}>{item.name}</Text>
            </View>
          )}
          horizontal={true}
          initialNumToRender={2}
          onEndReachedThreshold={0.5}
          onEndReached={this.EndReach}
          ListEmptyComponent={<EmptyList />}></FlatList>
        <Text style={styles.verticaltext}>Vertical FlatList</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => (
            <View style={styles.flatlistdiv}>
              <Text style={styles.flatlistin}>
                {item.id}. {item.title}
              </Text>
            </View>
          )}
          initialNumToRender={1}
          ListEmptyComponent={<EmptyList />}
          onEndReached={this.EndReach}
          onEndReachedThreshold={0.5}
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
    color: 'white',
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

export default List;
