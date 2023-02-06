import React, {useState} from 'react';
import Authenticate from './Authentication/Authenticate';
import Authenticated from './Authentication/Authenticated';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '724617183097-kckbammql6mplubttqmop9l1sqd9jkd1.apps.googleusercontent.com',
});

interface IProps {}

interface IState {
  authenticated: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    {
      this.state = {
        authenticated: false,
      };
    }
  }

  componentDidMount = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({authenticated: true});
      } else {
        this.setState({authenticated: false});
      }
    });
  };

  handleGoogleButtonPress = async () => {
    try {
      // get the user id token
      const {idToken} = await GoogleSignin.signIn();
      // create a credential using the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // authenticate the user using the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    if (this.state.authenticated) {
      return <Authenticated />;
    }
    return (
      <Authenticate handleGoogleButtonPress={this.handleGoogleButtonPress} />
    );
  }
}

export default App;
