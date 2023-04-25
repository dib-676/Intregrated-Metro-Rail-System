import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  headerFrame: {
    width: vw(360),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: vw(35),
    height: vh(37),
    marginHorizontal: vw(16),
    tintColor: colors.white,
  },
  dropDownView: {
    width: vw(140),
    height: vh(35),
    borderRadius: vw(10),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownValue: {
    width: vw(115),
    textAlign: 'center',
    fontFamily: fonts.IBM_SemiBold,
    fontSize: vw(15),
    marginEnd: vw(2.5),
    color: colors.darkBlack,
  },
  dropDownArrow: {
    width: vw(15),
    height: vw(15),
    tintColor: colors.darkBlack,
  },
  drawerMenu: {
    marginStart: vw(105),
    width: vw(35),
    height: vh(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerMenuIcon: {
    width: vw(32),
    height: vw(32),
    tintColor: colors.white,
  },
  backBtn: {
    marginStart: vw(16),
    width: vw(20),
    height: vw(16),
  },
  backBtnImg: {
    width: vw(16),
    height: vh(16),
  },
  searchBox: {
    marginStart: vw(20),
    backgroundColor: colors.white,
    width: vw(270),
    height: vh(35),
    borderRadius: vw(5),
    flexDirection: 'row',
  },
  searchBoxInp: {
    paddingStart: vw(10),
    width: vw(240),
    // borderWidth: 2,
  },
  clearBoxBtn: {
    // borderWidth:2,
    width: vw(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearBox: {
    width: vw(15),
    height: vh(15),
  },
});
export default style;
