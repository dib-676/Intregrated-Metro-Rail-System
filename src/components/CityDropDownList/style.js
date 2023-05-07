import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  mainFrame: {
    flex: 1,
    backgroundColor: colors.black30,
  },
  dropDown: {
    marginStart: vw(67),
    backgroundColor: colors.white,
    width: vw(140),
    height: vh(100),
    borderRadius: vw(10),
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  item: {
    width: vw(140),
    fontSize: vw(15),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_SemiBold,
    marginStart: vw(20),
    height: vw(30),
  },
  itemSeparatorComponent: {
    height: vh(1),
    backgroundColor: colors.borderColor,
  },
  close: {
    marginStart: vw(67),
    width: vw(140),
    height: vh(47),
  },
});
export default style;
