import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';
const {vw, vh} = require('../../../utils/dimensions');

const style = StyleSheet.create({
  renderHeaderFrame: {
    paddingStart: vw(16),
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    height: vw(50),
    justifyContent: 'center',
  },
  renderContactItem: {
    width: '50%',
    height: vw(50),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderStDetailItem: {
    height: vw(30),
    // justifyContent: 'center',
    paddingVertical: vw(5),
    flexDirection: 'row',
  },
  renderGatesItem: {
    paddingVertical: vw(5),
  },
  renderPlatform: {
    paddingVertical: vw(5),
  },
  renderTxtFrame: {
    color: colors.red,
    fontFamily: fonts.IBM_Bold,
    fontSize: vw(14),
  },
  renderTxtContact: {
    marginStart: vw(10),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Bold,
    fontSize: vw(12),
  },
  renderTxtGate: {
    marginStart: vw(20),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Bold,
    fontSize: vw(13),
  },
  renderSubTxtGate: {
    marginStart: vw(20),
    color: colors.darkBlack,
    fontFamily: fonts.IBM_Regular,
    fontSize: vw(13),
  },
  renderViewGate: {
    flexDirection: 'row',
    marginVertical: vw(10),
  },
  renderImgViewContact: {
    marginEnd: vw(10),
  },
  renderImgViewStDetail: {
    marginStart: vw(20),
    marginEnd: vw(10),
    // borderWidth: 1,
  },
  renderImgContact: {
    width: vw(20),
    height: vh(21),
  },
  renderImgStDetail: {
    width: vw(20),
    height: vh(21),
  },
});
export default style;
