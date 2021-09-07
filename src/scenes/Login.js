/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
 // Dimensions,
} from 'react-native';
import styles from '../../Styles/Style.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgImage from '../../assets/images/background.png';
//const {width: Width} = Dimensions.get('window');
class Login extends React.Component {
  NetInfoSubscribtion = null;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: true,
      press: false,
      nameValidate: true,
      passValidate: true,
      idAddress: '',
      //connection_status: false,
      //connection_wifi_enabled: false
    };
  }
  validate(text, type) {
    //alph=/^[a-zA-Z]+$/
    //num=/^[0-9]+$/
    if (type === 'username') {
      if (!text === '') {
        this.setState({nameValidate: true}), this.setState({username: text});
      } else {
        this.setState({nameValidate: false});
      }
    } else if (type === 'password') {
      if (!text === '') {
        this.setState({passValidate: true});
        this.setState({password: text});
      } else {
        this.setState({passValidate: false});
      }
    }
  }
  onIconPress = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  render() {
    return (
      <View style={styles.containerBcg}>
        <ImageBackground source={bgImage} style={[styles.imageBackground]}>
          <View style={[{marginTop: hp('-10%')}]}>
            <Image
              style={[
                styles.imageLogo,
                {width: hp('52%'), height: hp('10%'), marginTop: hp('30%')},
              ]}
             // source={require('../../assets/images/logo.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp('10%'),
            }}>
            {/* <Image style={[styles.inputImage , { position : 'absolute' , top:10 , left: 27}]}
                        source={require('../../assets/images/iconUser.png')}
                /> */}
            <TextInput
              style={styles.textAreaContainer}
              placeholder="Username"
            />
          </View>
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: hp('10%'),
              },
            ]}>
            <TextInput
              style={styles.textAreaContainer}
              placeholder="Password"
              secureTextEntry={this.state.showPassword}
            />
            <TouchableOpacity
              style={{
                width: wp('14%'),
                height: hp('8%'),
                marginLeft: wp('-14%'),
                marginTop: hp('0.5%'),
              }}
              onPress={this.onIconPress}>
              <Image
                style={[
                  styles.imageEyeIcon,
                  {
                    width: wp('6%'),
                    height: hp('3.5%'),
                    marginTop: hp('2.8%'),
                    marginLeft: wp('6.5%'),
                  },
                ]}
                source={require('../../assets/images/eye-icon-cross.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.roundButtonBlue /* {up : ('5%'), marginBottom: 50, width: Width - 55,color : '#0000FF' , height: 45, justifyContent: 'center', borderRadius: 25} */,
            ]}
            onPress={() => this.props.navigation.navigate('Vehicle')}>
            <Text style={styles.btnTextBlueButton}>LOGIN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
export default Login;
