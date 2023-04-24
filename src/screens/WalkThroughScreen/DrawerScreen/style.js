import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  mainFrame: {
    flex: 1,
    backgroundColor: colors.blue50,
    alignItems: 'flex-end',
  },
  closeBtn: {
    width: vw(35),
    height: vh(35),
    marginTop: vh(12),
    marginEnd: vw(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: vw(25),
    height: vh(25),
    tintColor: colors.white,
  },
  menuItemView: {
    marginTop: vw(12),
    width: vw(300),
    height: vh(700),
    backgroundColor: colors.white,
    borderTopStartRadius: vw(20),
    borderBottomStartRadius: vw(20),
  },
  menuItems: {
    backgroundColor: colors.white,
    borderTopStartRadius: vw(20),
    height: vh(450),
    width: vw(300),
  },
  quickContactView: {
    backgroundColor: colors.black10,
    height: vh(250),
    width: vw(300),
    borderBottomStartRadius: vw(20),
  },
  quick_contact: {
    marginHorizontal: vw(18),
    marginVertical: vh(18),
    fontSize: vw(20),
    color: colors.orange,
    fontFamily: fonts.IBM_Bold,
  },
  dmrcHelpline: {
    width: vw(300),
    height: vh(25),
    flexDirection: 'row',
    marginStart: vw(20),
    marginBottom: vh(10),
  },
  dmrcHelplineIcon: {
    width: vw(25),
    height: vh(26),
  },
  dmrcHelplineTxt: {
    fontSize: vw(15),
    marginStart: vw(16),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Medium,
  },
  item: {
    width: vw(300),
    marginHorizontal: vw(20),
    marginVertical: vh(10),
    fontSize: vw(15),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_SemiBold,
  },
});
export default style;
