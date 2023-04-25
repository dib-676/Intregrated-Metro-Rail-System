import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../../utils';
const {vw, vh} = dimensions;

const style = StyleSheet.create({
  mainFrame: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footerScreen: {
    position: 'absolute',
    bottom: 0,
    height: vh(100),
    width: vw(360),
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default style;
