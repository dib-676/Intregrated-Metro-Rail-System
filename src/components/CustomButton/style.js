import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  btnContainer: {
    marginHorizontal: vw(80),
    height: vh(50),
    borderRadius: vw(20),

    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.white,
    fontFamily: fonts.IBM_Bold,
    fontSize: vw(15),
  },
});
export default style;
