import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  selectStationView: {
    marginHorizontal: vw(20),
    height: vh(180),
  },
  flipView: {
    backgroundColor: colors.black70,
    width: vw(30),
    height: vw(30),
    left: vw(140),
    top: vh(69),
    position: 'absolute',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(15),
  },
  flip: {
    width: vw(25),
    height: vh(25),
    tintColor: colors.white,
  },
});
export default style;
