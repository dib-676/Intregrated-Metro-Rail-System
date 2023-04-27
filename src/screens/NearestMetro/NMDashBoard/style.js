import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  mainFrame: {
    flex: 1,
    backgroundColor: colors.white,
  },
  renderItemCard: {
    width: vw(328),
    height: vh(60),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: vw(5),
    marginTop: vw(10),
  },
  card: {
    width: vw(328),
    height: vh(30),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(5),
  },
});
export default style;
