import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimensions';
import {colors, fonts} from '../../utils';

const style = StyleSheet.create({
  radioGroup: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(5),
  },
  outerCircle: {
    width: vw(20),
    height: vw(20),
    borderRadius: vw(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.orange,
  },
  innerCircle: {
    width: vw(10),
    height: vh(10),
    borderRadius: vw(5),
    backgroundColor: colors.orange,
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    height: vh(50),
    paddingStart: vw(10),
  },
  radioLabel: {
    marginStart: vw(10),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Medium,
  },
});
export default style;
