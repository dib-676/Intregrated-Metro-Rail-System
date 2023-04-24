import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  mainFrame: {
    flex: 1,
    backgroundColor: colors.white,
  },
  planJourney: {
    marginHorizontal: vw(20),
    marginVertical: vw(16),
    fontSize: vw(18),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_SemiBold,
  },
  dateTimerView: {
    height: vh(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(20),
  },
  showRouteAndFare: {
    marginHorizontal: vw(80),
    height: vh(50),
    borderRadius: vw(20),

    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showRouteAndFareTxt: {
    color: colors.white,
    fontFamily: fonts.IBM_Bold,
    fontSize: vw(15),
  },
  bottomPart: {
    marginHorizontal: vh(16),
    marginVertical: vw(40),
  },
});
export default style;
