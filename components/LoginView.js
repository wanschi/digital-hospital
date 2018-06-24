import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

import TouchID from 'react-native-touch-id';

import ChatbotButton from '../components/ChatbotButton';

import extStyles from '../assets/styles';

type Props = {};

export default class LoginView extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light'
  };

  componentDidMount() {
    this._handleLogin();
  }

  _handleLogin = () => {
    TouchID.authenticate('Zum einloggen Finger auflegen.')
      .then(success => {
        AlertIOS.alert('Authenticated Successfully');
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../assets/chatbackground.png')}
        >
          <Image
            style={styles.logo}
            source={require('../assets/ukb_logo_white.png')}
          />
          <Text style={styles.loginText}>Hallo,{'\n'}Herr Mustermann</Text>
          <TextInput
            style={styles.passwordInput}
            ref="_textInput"
            placeholder="Passwort"
          />
          <ChatbotButton
            onPress={this._handleLogin}
            style={styles.loginButton}
            text="Einloggen mit TouchID"
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: 72,
    marginBottom: 104
  },
  loginButton: {
    alignSelf: 'flex-end',
    marginRight: 48
  },
  imageBackground: {
    width: 414,
    flex: 1,
    alignItems: 'center'
  },
  loginText: {
    alignSelf: 'flex-start',
    marginLeft: 48,
    ...extStyles.text.loginText,
    marginBottom: 40
  },
  passwordInput: {
    marginHorizontal: 48,
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
    marginBottom: 48,
    paddingBottom: 4
  }
});
