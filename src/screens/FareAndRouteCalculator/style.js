import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import {colors} from '../../utils';

const style = StyleSheet.create({
  stationInterChange: {
    height: vh(40),
    justifyContent: 'center',
    paddingHorizontal: vw(10),
    color: colors.darkBlack,
  },
});
export default style;
