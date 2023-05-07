import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  navigationBtn: {
    marginHorizontal: vw(12),
    marginVertical: vh(20),
    shadowOffset: {
      width: vw(50),
      height: vh(20),
    },
    width: vw(140),
    height: vh(90),
    borderRadius: vw(7),
    backgroundColor: colors.black20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBtnTxt: {
    fontSize: vw(12),
    fontWeight: '700',
    color: colors.darkBlack,
  },
  mapSearchImg: {
    width: vw(30),
    height: vh(30),
  },
});
export default style;
