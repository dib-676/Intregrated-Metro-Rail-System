import {StyleSheet} from 'react-native';
import {dimensions} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  mapView: {
    marginHorizontal: vw(16),
    marginVertical: vh(10),
    width: vw(328),
    height: vh(180),
    borderWidth: 2,
  },
});
export default style;
