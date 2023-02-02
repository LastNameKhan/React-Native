import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface IProps {
  navigation?: any;
}

interface IState {
  username: string;
  password: string;
  curr: number;
  data: any;
}

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      username: '',
      password: '',
      curr: 0,
      data: [
        'https://wallpaperaccess.com/full/57166.jpg',
        'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg',
        'https://mobimg.b-cdn.net/v3/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg',
      ],
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({curr: this.state.curr + 1});
      if (this.state.curr == this.state.data.length) {
        this.setState({curr: 0});
      }
    }, 3000);
    this.getinitialdata();
  };

  getinitialdata = async () => {
    const GotData: any = await AsyncStorage.getItem('Data');
    const parsedData = JSON.parse(GotData);
    console.log(parsedData, 'ParsedData');
  };

  handleCheck = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri: this.state.data[this.state.curr],
          }}
        />
        <Text style={styles.logintext}>LOGIN</Text>
        <TextInput
          placeholder="Please Enter UserName..."
          placeholderTextColor="#9c9b9b"
          style={styles.usernameinput}
          onChangeText={e => this.setState({username: e})}
        />
        <TextInput
          placeholder="Please Enter Password..."
          placeholderTextColor="#9c9b9b"
          style={styles.passinput}
          onChangeText={e => this.setState({password: e})}
        />
        <TouchableOpacity style={styles.loginbtn}>
          <Text style={styles.loginbtntext}>Login</Text>
        </TouchableOpacity>
        <Text onPress={this.handleCheck} style={styles.createaccounttext}>
          Dont Have Account?Create One.
        </Text>
        {/* <TabNavigation /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    height: 800,
    width: 400,
  },
  logintext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
    opacity: 0.3,
    marginTop: 100,
  },
  usernameinput: {
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    margin: 20,
    fontSize: 25,
    color: 'white',
    width: 300,
  },
  passinput: {
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    margin: 20,
    fontSize: 25,
    color: 'white',
    width: 300,
  },
  loginbtn: {
    textAlign: 'center',
    borderBottomColor: 'white',
    borderLeftWidth: 3,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderColor: 'white',
    height: 50,
    width: 120,
    marginTop: 30,
  },
  loginbtntext: {
    color: 'white',
    fontSize: 40,
  },
  createaccounttext: {
    marginTop: 10,
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
});

export default Login;
