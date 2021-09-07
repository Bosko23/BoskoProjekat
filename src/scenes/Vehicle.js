/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Picker, Dimensions} from 'react-native';
import styles from '../../styles/style.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgImage from '../../assets/images/background.png';
const {width : Width} = Dimensions.get('window');
class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: 'No data',
      data:[],
  };
  }
   /* showAlert = () =>{
    Alert.alert(
       'You need to...'
    )
 } */
  static navigationOptions = {
    headerShown: false,
}
//Analog networking
componentDidMount(){
    this.setState({
        data : [
            'AKG-184',
            'FPA-345',
            'LRV-914',
            'PDL-642',
            'REH-103',
            'SYH-246',
            'XPY-843',
            'APT-810',
            'JOH-229',
            'ODO-697',
            'PYN-896',
            'SJW-650',
            'WJG-814',
            'ZLW-103',
            'FJU-650',
            'KIR-432',
            'OIR-954',
            'QWP-943',
            'SWQ-656',
            'XCV-943',
        ],
    });
}
  render() {
    return (
      <View style={[styles.containerBcg , {marginTop : '0%'}] }>
                <ImageBackground source= {bgImage} style={ [styles.imageBackground]}>
                <Text style={[styles.normalHeadlines, {alignItems: 'center'}]}>Select vehicle</Text>
                {/* <Text style={styles.text}>{this.state.pickerValue}</Text> */}
                <Picker style={[styles.picker, {marginTop: '30%',
        backgroundColor: 'cyan',//After setting the background color for Picker, the drop-down arrow will disappear
        width: 200}]}
                    selectedValue={this.state.pickerValue}
                    mode={'dropdown'}  //'dialog' pop-up window'dropdown' drop down
                    onValueChange={(value) => {
                        this.setState({ pickerValue: value });
                        /* if (value === 'name5') {
                           alert('Data processing');
                        } */
                    }}>
                    <Picker.Item label={'please choose'} value={'please choose'} />
                    {this.state.data.map((name) => <Picker.Item label={name} value={name} />)}

                </Picker>
                <TouchableOpacity style={[styles.roundButtonBlue , {marginTop : '50%'} /* { up : 5, marginBottom: 50, width: Width - 55,color : '#0000FF' , height: 45, justifyContent: 'center', borderRadius: 25} */]}
              onPress = {
                    () => this.props.navigation.navigate('List')
                    /* this.showAlert() */
              }>
                <Text style={styles.btnTextBlueButton}>NEXT</Text>
            </TouchableOpacity>
             </ImageBackground>
            </View>
    );
  }
}
export default Vehicle;
