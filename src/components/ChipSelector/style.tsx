import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import {colors, fonts} from '../../utils';

const style = StyleSheet.create({
  chipSelectorView: {
    width: vw(360),
    height: vh(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chipButton: {
    width: vw(162),
    height: vh(60),
    borderRadius: vw(8),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipName: {
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Medium,
    fontSize: vw(13),
  },
  chipSlug: {
    backgroundColor: colors.darkBlack,
    width: vw(162),
    height: vh(20),
    borderBottomStartRadius: vw(8),
    borderBottomEndRadius: vw(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipSlugTxt: {
    color: colors.white,
    fontSize: vw(10),
    fontFamily: fonts.IBM_Medium,
  },
  chipTime: {
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Regular,
  },
});
export default style;
