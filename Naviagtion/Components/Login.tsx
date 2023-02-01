import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TabNavigation from '../Navigation/TabNavigation';

interface IProps {
  navigation?: any;
}

interface IState {
  username: string;
  password: string;
}

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount = () => {
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
            uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v535batch2-mynt-43.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=9f602de67a347b7c50ef8eeac3835189',
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
        <TouchableOpacity onPress={this.handleCheck} style={styles.loginbtn}>
          <Text style={styles.loginbtntext}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.createaccounttext}>
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
