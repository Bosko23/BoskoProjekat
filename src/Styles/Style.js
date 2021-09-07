/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

//Normal headline
var FONT_NORMAL_HEADLINES_SIZE = 24;
var FONT_NORMAL_HEADLINES_LB = 19;
var FONT_NORMAL_BODY_COPY_SIZE = 14;
var FONT_NORMAL_BODY_COPY_LB = 17;

export function normalize(size) {
  const newSize = size * scale;
  return newSize;
}
// var fontFamilyGhotamBold =
 // Platform.OS === 'ios' ? 'Gotham Bold' : 'Gotham-Bold';
var fontFamilyGhotamMedium =
  Platform.OS === 'ios' ? 'Gotham Medium' : 'Gotham-Medium';
var fontFamilyGhotamLight = Platform.OS === 'ios' ? 'Gotham' : 'GothamLight';
const styles = StyleSheet.create({
  //kontejner sa bojom za pozadinu
  containerBcg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  loginBtn: {},
  imageBackground: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Stil za tekst (veca i manja slava)
  normalHeadlines: {
    color: '#000000',
    fontSize: normalize(FONT_NORMAL_HEADLINES_SIZE),
    lineHeight: normalize(FONT_NORMAL_HEADLINES_LB),
    fontFamily: fontFamilyGhotamMedium,
  },
  normalBodyCopy: {
    color: '#000000',
    fontSize: normalize(FONT_NORMAL_BODY_COPY_SIZE),
    lineHeight: normalize(FONT_NORMAL_BODY_COPY_LB),
    fontFamily: fontFamilyGhotamMedium,
  },
  // stil za button text i button
  btnTextBlueButton: {
    color: '#fff',
    fontSize: normalize(FONT_NORMAL_BODY_COPY_SIZE),
    lineHeight: normalize(FONT_NORMAL_BODY_COPY_LB),
    fontFamily: fontFamilyGhotamMedium,
    textAlign: 'center',
  },
  roundButtonBlue: {
    justifyContent: 'center',
    width: wp('67%'),
    height: hp('7.5%'),
    padding: hp('1%'),
    borderRadius: hp('4%'),
    backgroundColor: '#223f89',
  },
  // stil za input polja (normalan, manje i veliko input polje)
  textAreaContainer: {
    marginTop: hp('2%'),
    height: hp('8%'),
    borderColor: '#919190',
    borderWidth: 1.5,
    minWidth: wp('84%'),
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: hp('2%'),
    fontFamily: fontFamilyGhotamLight,
  },
  textAreaContainerSmall: {
    marginTop: hp('2%'),
    height: hp('7%'),
    borderColor: '#919190',
    borderWidth: 1.5,
    minWidth: wp('40%'),
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: hp('2%'),
    fontFamily: fontFamilyGhotamLight,
  },
  textAreaContBig: {
    marginTop: hp('2%'),
    height: hp('13.8%'),
    borderColor: '#919190',
    borderWidth: 1.5,
    minWidth: wp('84%'),
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: hp('2%'),
    fontFamily: fontFamilyGhotamLight,
  },
});
export default Styles;
