import {StyleSheet} from 'react-native';
import { vh, vw } from '../../utils/dimensions';
import { colors } from '../../utils';

const style = StyleSheet.create({
  mainFrame: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    top: vh(300),
    left: vw(180),
  },
  indicatorTxt: {
    color: colors.black60,
    position: 'absolute',
    top: vh(340),
    left: vw(85),
  },
});

export default style;
