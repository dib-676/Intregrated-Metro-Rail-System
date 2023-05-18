import {StyleSheet} from 'react-native';
import {vw, vh} from '../../../../utils/dimensions';
import {colors, fonts} from '../../../../utils';

const style = StyleSheet.create({
  mainFrame: {
    width: vw(360),
    height: vh(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(10),
  },
  card: {
    width: vw(110),
    height: vh(70),
    // borderWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: vw(8),
    flexDirection: 'row',
    paddingHorizontal: vw(20),
  },
  headerCard: {
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Bold,
    textAlign: 'center',
  },
  headerCardTxt: {
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Medium,
    textAlign: 'center',
  },
  fareImg: {
    width: vw(30),
    height: vw(30),
    borderRadius: vw(15),
    transform: [{rotate: '150deg'}],
  },
});
export default style;
