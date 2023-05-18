import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import {colors, fonts} from '../../utils';

const style = StyleSheet.create({
  fareView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: vw(30),
    paddingHorizontal: vw(30),
    marginTop: vh(10),
    marginBottom: vh(20),
  },
  fareHeaderView: {
    height: vh(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  fareHeader: {
    color: colors.darkBlack,
    fontSize: vw(13),
    fontFamily: fonts.IBM_Medium,
    marginBottom: vh(10),
  },
  fareTxt: {
    color: colors.darkBlack,
    fontSize: vw(15),
    fontFamily: fonts.IBM_SemiBold,
  },
});

export default style;
