import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  dateTimePickerView: {
    borderRadius: vw(10),
    width: vw(150),
    height: vw(55),
    backgroundColor: colors.black10,
  },
  dateTimePickerIconView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: vw(5),
    // borderWidth:2,
    marginTop: vw(10),
    height: vw(25),
  },
  date_time_icon: {
    width: vw(20),
    height: vh(20),
    marginEnd: vw(10),
  },
  type: {
    marginTop: vw(5),
    marginStart: vw(20),
    color: colors.black60,
  },
  value: {
    fontSize: vw(14),
    marginStart: vw(10),
    color: colors.darkBlack,
  },
});
export default style;
