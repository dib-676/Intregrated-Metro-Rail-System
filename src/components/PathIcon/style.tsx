import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import {colors} from '../../utils';

const style = StyleSheet.create({
  openCircle: {
    width: vw(18),
    height: vw(18),
    borderRadius: vw(9),
  },
  closeCircle: {
    width: vw(18),
    height: vw(18),
    borderRadius: vw(9),
    backgroundColor: colors.white,
    borderWidth: vw(5),
  },
  dotIcon: {
    width: vw(4),
    height: vh(12),
    marginTop: vw(3),
    marginStart: vw(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatDotIcon: {
    width: vw(12),
    height: vh(2),
    borderWidth: 1,
  },
});
export default style;
