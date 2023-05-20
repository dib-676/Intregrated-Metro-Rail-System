import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  mainFrame: {
    flex: 1,
    backgroundColor: colors.white,
  },
  planYourJourney: {
    marginHorizontal: vw(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planJourney: {
    marginVertical: vw(16),
    fontSize: vw(18),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_SemiBold,
  },
  reset: {
    fontSize: vw(14),
    color: colors.red,
    textDecorationLine: 'underline',
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
    paddingVertical: vw(20),
    borderTopLeftRadius: vw(10),
    borderTopRightRadius: vw(10),
    marginTop: vw(40),
    backgroundColor: colors.black06,
  },
  metroMap: {
    marginTop: vw(10),
    width: vw(328),
    height: vh(110),
    borderRadius: vw(8),
    backgroundColor: colors.black20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metroMapImg: {
    alignSelf: 'center',
    height: vw(70),
  },
});
export default style;
