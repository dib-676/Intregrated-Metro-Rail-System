import {StyleSheet} from 'react-native';
import {vw, vh} from '../../../../utils/dimensions';
import {colors, fonts} from '../../../../utils';

const style = StyleSheet.create({
  mainFrame: {
    width: vw(360),
    height: vh(100),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: vw(5),
  },
  card: {
    width: vw(110),
    height: vh(70),
    // borderWidth: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: vw(8),
    flexDirection: 'row',
  },
  circleImg: {
    width: vw(40),
    height: vw(40),
    borderRadius: vw(20),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCard: {
    color: colors.black60,
    fontFamily: fonts.IBM_Bold,
    textAlign: 'center',
    fontSize: vw(12),
  },
  headerCardTxt: {
    marginTop: vh(10),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Medium,
    textAlign: 'center',
    fontSize: vw(17),
  },
  fareImg: {
    width: vw(20),
    height: vw(20),
    borderRadius: vw(10),
  },
});
export default style;
