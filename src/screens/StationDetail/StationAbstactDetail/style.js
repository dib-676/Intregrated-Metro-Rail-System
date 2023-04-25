import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';
const {vw, vh} = require('../../../utils/dimensions');

const style = StyleSheet.create({
  renderHeaderFrame: {
    paddingStart: vw(16),
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    height: vw(50),
    justifyContent: 'center',
  },
  renderTxtFrame: {
    color: colors.red,
    fontFamily: fonts.IBM_Bold,
    fontSize: vw(14),
  },
});
export default style;
