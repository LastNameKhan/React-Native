import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TabNavigation from '../Navigation/TabNavigation';

interface IProps {}

interface IState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
  data: any;
}

class SignUp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
      data: [],
    };
  }

  handleSingup = async () => {
    {
      this.state.password != this.state.confirmpassword
        ? Alert.alert('Password and ConfirmPassword Does not match')
        : Alert.alert('User Added Successfully');
    }
    const newData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      confirmpassword: this.state.confirmpassword,
    };
    this.setState({data: [...this.state.data, newData]});
    await AsyncStorage.setItem('Data', JSON.stringify(this.state.data));
  };

  render() {
    return (
      //@ts-ignore
      <View style={styles.maincontainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri: 'https://preview.redd.it/tiamrp085bp81.png?width=640&crop=smart&auto=webp&s=95e241ebdb83f72186b1f74b40ad2e3ba0261258',
          }}
        />
        <Text style={styles.signuptext}>Sign Up</Text>
        <TextInput
          onChangeText={e => this.setState({firstname: e})}
          style={styles.textinput}
          placeholderTextColor="#717070"
          placeholder="Firstname"
        />
        <TextInput
          onChangeText={e => this.setState({lastname: e})}
          style={styles.textinput}
          placeholderTextColor="#717070"
          placeholder="Lastname"
        />
        <TextInput
          onChangeText={e => this.setState({email: e})}
          style={styles.textinput}
          placeholderTextColor="#717070"
          placeholder="Email"
        />
        <TextInput
          onChangeText={e => this.setState({password: e})}
          style={styles.textinput}
          placeholderTextColor="#717070"
          placeholder="Password"
        />
        <TextInput
          onChangeText={e => this.setState({confirmpassword: e})}
          style={styles.textinput}
          placeholderTextColor="#717070"
          placeholder="ConfirmPassword"
        />
        <TouchableOpacity onPress={this.handleSingup} style={styles.signupbtn}>
          <Text style={styles.btnText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    textAlign: 'center',
  },

  backgroundImage: {
    height: 800,
    width: 400,
    position: 'absolute',
  },
  signuptext: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    opacity: 0.5,
  },
  textinput: {
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    fontSize: 40,
    margin: 20,
    color: 'white',
  },
  signupbtn: {
    backgroundColor: 'black',
    borderBottomColor: 'white',
    borderLeftWidth: 3,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderColor: 'white',
    height: 50,
    width: 150,
    marginTop: 30,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 120,
  },
  btnText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '500',
  },
});

export default SignUp;
