import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../../utils';
const {vw, vh} = dimensions;

const style = StyleSheet.create({
  stationNameView: {
    borderWidth: 1,
    width: vw(360),
    height: vw(200),
  },
  backBtn: {
    marginTop: vh(20),
    marginStart: vw(20),
    width: vw(45),
    height: vh(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtnImg: {
    width: vw(30),
    height: vh(30),
  },
  metroCircleOuterLayer: {
    alignSelf: 'center',
    width: vw(110),
    height: vw(110),
    borderRadius: vw(55),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  metroCircleInnerLayer: {
    width: vw(85),
    height: vw(85),
    borderRadius: vw(85 / 2),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stationNameLayer: {
    width: vw(120),
    height: vh(50),
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stationNameTxt: {
    fontSize: vw(11),
    color: colors.white,
  },
});
export default style;
