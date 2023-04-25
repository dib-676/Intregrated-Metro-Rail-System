import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import style, {btnStyle} from './style';
import {strings} from '../../../utils';
import React from 'react';

const StationFooter = (props: any) => {
  return (
    <React.Fragment>
      <CustomButton
        label={strings.planJourney}
        style={{btnContainer: btnStyle.btnContainer, btnTxt: btnStyle.btnTxt}}
      />
      <CustomButton
        label={strings.firstLastMetro}
        style={{btnContainer: btnStyle.btnContainer, btnTxt: btnStyle.btnTxt}}
      />
    </React.Fragment>
  );
};
export default StationFooter;
