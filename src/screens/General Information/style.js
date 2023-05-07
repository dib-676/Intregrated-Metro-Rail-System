import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from '../../utils';
const {vw, vh} = dimensions;
const style = StyleSheet.create({
  generalInfo: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  support: {
    alignSelf: 'center',
    width: vw(180),
    height: vh(210),
    marginTop: vw(30),
  },
  emerency: {
    fontFamily: fonts.IBM_Medium,
    color: colors.darkBlack,
    fontSize: vw(16),
    marginVertical: vh(10),
    marginHorizontal: vw(10),
  },
  numberLink: {
    marginVertical: vw(10),
  },
  link: {
    marginHorizontal: vw(10),
    width: vw(230),
    color: colors.darkBlack,
  },
  number_link: {
    borderWidth: 1,
    width: vw(165),
    color: colors.darkBlack,
    borderColor: colors.backgroundColor,
    justifyContent: 'center',

    paddingStart: vw(10),
  },
  metroLink: {
    marginTop: vw(10),
    color: colors.blue,
  },
  impNumber: {
    flexDirection: 'row',
    width: vw(328),
    height: vh(40),
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
});
export default style;
