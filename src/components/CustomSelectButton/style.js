import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  selectStation: {
    // borderWidth: 2,
    height: vh(80),
    borderRadius: vw(10),
    marginBottom: vw(10),
    flexDirection: 'row',
    backgroundColor: colors.black10,
  },
  iconView: {
    width: vw(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: vw(10),
    height: vw(10),
    tintColor: colors.blue,
  },
  cardSelectStationView: {
    width: vw(282),
    // borderWidth:2,
  },
  stationType: {
    marginTop: vw(10),
    // borderWidth:2,
    fontSize: vw(12),
    paddingStart: vw(5),
    color: colors.black60,
  },
  selectStationCard: {
    marginTop: vw(10),
    // borderWidth:2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectStationCardTxt: {
    fontSize: vw(13),
    paddingStart: vw(5),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Bold,
  },
  selectStationCardImg: {
    width: vw(15),
    height: vw(15),
    marginEnd: vw(10),
  },
  flipView: {
    backgroundColor: colors.black70,
    width: vw(30),
    height: vw(30),
    left: vw(140),
    top: vh(69),
    position: 'absolute',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(15),
  },
  flip: {
    width: vw(25),
    height: vh(25),
    tintColor: colors.white,
  },
});
export default style;
