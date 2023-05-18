import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../../utils/dimensions';
import {colors, fonts} from '../../../../utils';

const style = StyleSheet.create({
  routeCard: {
    marginHorizontal: vw(5),
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: vh(5),
  },
  stationView: {
    marginStart: vw(7),
  },
  firstStation: {
    color: colors.darkBlack,
    fontFamily: fonts.IBM_SemiBold,
  },
  lastStation: {
    marginTop: vh(24),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_SemiBold,
  },
  stationsTT: {
    marginTop: vh(10),
    marginBottom: vh(37),
    color: colors.darkBlack,
  },
  showBtn: {
    color: colors.darkBlack,
  },
});
export default style;
