import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';
import FitImage from 'react-native-fit-image';
// import firebase from 'react-native-firebase';

const styles = {
  flex: {
    flex: 1,
  },
  password: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  username: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
  },
  head: {
    height: hp('40%'),
    alignItems: 'center',
  },
  title: {
    top: hp('-25%'),
    color: '#FCF7F1',
    fontSize: 50,
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: hp('8%'),
  },
  marginTop: {
    marginTop: 5,
  },
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      Password: '',
      repeatPassword: '',
    };
  }

  // writeUserData = (username, password) => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(username, password)
  //     .then(res => {
  //       firebase
  //         .database()
  //         .ref('/users/' + res.user.id)
  //         .set({
  //           username,
  //           password,
  //           id: res.user.id,
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     });
  // };

  writeUserData = params => {
    console.log('register');
  };

  render() {
    return (
      <View style={styles.flex}>
        {/* head  */}
        <View style={styles.head}>
          <FitImage
            style={{width: wp('100%'), height: hp('38%')}}
            source={require('../../assets/img/bg.png')}
          />
          <Text style={styles.title}>Chat App</Text>
        </View>
        {/* end head */}

        {/* main */}
        <View style={styles.flex}>
          <View style={styles.wrapper}>
            <View style={styles.flex} />
            <View style={{width: wp('75%'), height: hp('30%')}}>
              {/* user input */}
              <TextInput
                style={styles.username}
                label="Username"
                value={this.state.username}
                onChangeText={username => this.setState({username})}
                theme={{
                  colors: {primary: '#053354', underlineColor: 'transparent'},
                }}
              />
              <TextInput
                style={styles.password}
                label="Password"
                secureTextEntry
                value={this.state.Password}
                onChangeText={Password => this.setState({Password})}
                theme={{
                  colors: {primary: '#053354', underlineColor: 'transparent'},
                }}
              />
              <TextInput
                style={styles.password}
                label="Repeat Password"
                secureTextEntry
                value={this.state.repeatPassword}
                onChangeText={repeatPassword => this.setState({repeatPassword})}
                theme={{
                  colors: {primary: '#053354', underlineColor: 'transparent'},
                }}
              />
              {/* end user input */}
              <View style={{marginTop: hp('7%')}}>
                <Button
                  // onPress={() => this.props.navigation.navigate('Login')}
                  onPress={() =>
                    this.writeUserData(this.state.username, this.state.Password)
                  }
                  mode="contained"
                  color="#18A4E1">
                  Register
                </Button>
                <Button
                  onPress={() => this.props.navigation.navigate('Login')}
                  style={styles.marginTop}
                  mode="contained"
                  color="#18A4E1">
                  Login
                </Button>
              </View>
            </View>
            <View style={styles.flex} />
          </View>
        </View>
        {/* end main */}
      </View>
    );
  }
}
