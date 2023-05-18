import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../../utils/dimensions';
import {colors, fonts} from '../../../../utils';

const style = StyleSheet.create({
  mainView: {
    // marginTop: vh(28),
  },
  dotIcon: {
    width: vw(170),
    height: vh(44),
    marginBottom: vh(2),
    marginStart: vw(7),
    // borderWidth: 2,
    justifyContent: 'center',
    paddingStart: vw(5),
   
  },
  stationView:{
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Medium,
  }
});
export default style;
