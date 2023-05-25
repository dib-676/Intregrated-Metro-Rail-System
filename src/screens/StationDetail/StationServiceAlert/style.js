import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  serviceView: {
    width: vw(360),
    height: vh(70),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: vw(5),
  },
  dottedView: {
    width: vw(40),
    height: vh(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleLineicon: {
    height: vh(7),
    width: vw(1),
    marginVertical: vh(2),
  },
  circleIcon: {
    width: vw(15),
    height: vw(15),
    borderRadius: vw(15 / 2),
  },
  serviceLineView: {
    borderWidth: 2,
    width: vw(300),
    height: vh(53),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(7),
  },
});
export default style;
