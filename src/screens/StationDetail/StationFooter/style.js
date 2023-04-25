import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  footerScreen: {
    position: 'absolute',
    top: 900,
    borderWidth: 2,
    height: vh(100),
    width: vw(328),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const btnStyle = {
  btnContainer: {
    marginHorizontal: vw(10),
    width: vw(150),
    height: vh(50),
    borderRadius: vw(2),
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.white,
    fontFamily: fonts.IBM_Medium,
    fontSize: vw(15),
  },
};
export default style;
