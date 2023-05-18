import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  mainFrame: {
    flex: 1,
    backgroundColor: colors.white,
  },
  list: {
    width: vw(360),
    backgroundColor: colors.white,
  },
  stationItem: {
    paddingHorizontal: vw(16),
    width: vw(360),
    height: 50,
    borderColor: colors.borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  stationItemTxt: {
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Medium,
    fontSize: vw(13),
  },
  linesView: {
    flexDirection: 'row',
  },
  lines: {
    marginStart: vw(10),
    // borderWidth:vw(2),
    fontSize: vw(10),
    color: colors.black50,
    fontFamily: fonts.IBM_Medium,
    paddingHorizontal: vw(3),
  },
});
export default style;
