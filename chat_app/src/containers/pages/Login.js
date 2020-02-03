import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';
import FitImage from 'react-native-fit-image';
import {withNavigation} from 'react-navigation';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import firebase from 'react-native-firebase';

const styles = {
  flex: {
    flex: 1,
  },
  register: {
    marginTop: 5,
  },
  wrapper: {
    height: hp('40%'),
    alignItems: 'center',
  },
  img: {
    width: wp('100%'),
    height: hp('38%'),
  },
  title: {
    top: hp('-25%'),
    color: '#FCF7F1',
    fontSize: 50,
  },
  inputWrapper: {
    flexDirection: 'row',
    marginTop: hp('13%'),
  },
  inputSize: {
    width: wp('75%'),
    height: hp('30%'),
  },
  input: {
    backgroundColor: '#FAF8F0',
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
  },
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      Password: '',
    };
  }
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.wrapper}>
          <FitImage
            style={styles.img}
            source={require('../../assets/img/bg.png')}
          />
          <Text style={styles.title}>Chat App</Text>
        </View>
        <View style={styles.flex}>
          <View style={styles.inputWrapper}>
            <View style={styles.flex} />
            <View style={styles.inputSize}>
              <TextInput
                style={styles.input}
                label="Username"
                value={this.state.username}
                onChangeText={username => this.setState({username})}
                theme={{
                  colors: {primary: '#053354', underlineColor: 'transparent'},
                }}
              />
              <TextInput
                label="Password"
                style={styles.input}
                secureTextEntry
                value={this.state.Password}
                onChangeText={Password => this.setState({Password})}
                theme={{
                  colors: {primary: '#053354', underlineColor: 'transparent'},
                }}
              />
              <View style={{marginTop: hp('7%')}}>
                <Button
                  onPress={() => this.props.navigation.navigate('Mainapp')}
                  mode="contained"
                  color="#18A4E1">
                  Login
                </Button>
                <Button
                  style={styles.register}
                  onPress={() => this.props.navigation.navigate('Register')}
                  mode="contained"
                  color="#18A4E1">
                  Register
                </Button>
              </View>
            </View>
            <View style={styles.flex} />
          </View>
        </View>
      </View>
    );
  }
}

const HomeOri = withNavigation(Login);
export default HomeOri;
