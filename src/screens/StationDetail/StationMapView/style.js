import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  mapView: {
    marginHorizontal: vw(16),
    marginVertical: vh(10),
    width: vw(328),
    height: vh(180),
    borderWidth: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  zoomInOut: {
    position: 'absolute',
    width: vw(35),
    height: vh(35),
    borderWidth: 2,
    borderColor: colors.black40,
    backgroundColor: colors.white90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomIn: {
    left: 320,
    bottom: 60,
  },
  zoomOut: {
    left: 320,
    bottom: 20,
  },
  zoomIcon: {
    width: vw(20),
    height: vh(20),
    tintColor: colors.black60,
  },
});
export default style;
