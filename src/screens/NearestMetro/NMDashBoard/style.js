import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../../utils';
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
    // borderWidth: 1,
    borderRadius: vw(5),
    marginTop: vw(10),
    backgroundColor: colors.blue200,
  },
  card: {
    width: vw(328),
    height: vh(30),
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(10),
  },
  cardTxt: {
    color: colors.white,
    fontFamily: fonts.IBM_SemiBold,
  },
  cardTxtStName: {
    fontSize: vw(14),
    fontFamily: fonts.IBM_Medium,
  },
  btn: {
    width: vw(30),
    height: vh(25),
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dirImg: {
    width: vw(20),
    height: vh(20),
  },
  emptyComponent: {
    alignSelf: 'center',
    marginTop: vw(250),
  },
  emptyComponentMessage: {
    alignSelf: 'center',
    color: colors.darkBlack,
    fontSize: vw(15),
    fontFamily: fonts.IBM_Medium,
  },
  warningImg: {
    width: vw(100),
    height: vh(100),
    alignSelf: 'center',
  },
});
export default style;
