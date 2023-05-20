import {StyleSheet} from 'react-native';
import {vw} from '../../../utils/dimensions';
import {colors, fonts} from '../../../utils';

const style = StyleSheet.create({
  advanceFilter: {
    width: vw(328),
    borderRadius: vw(8),
    marginTop: vw(10),
    marginBottom: vw(20),
    alignSelf: 'center',
    backgroundColor: colors.black10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  advanceFilterTxt: {
    marginTop: vw(10),
    width: vw(270),
    fontSize: vw(12),
    color: colors.black60,
  },
});
export default style;
