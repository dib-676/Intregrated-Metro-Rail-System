import {Text, View} from 'react-native';
import {strings} from '../../../utils';
import RadioButton from '../../../components/RadioButton';
import style from './style';

const AdvanceFilter = (props: any) => {
  return (
    <View style={style.advanceFilter}>
      <Text style={style.advanceFilterTxt}>{strings.advanceFilter}</Text>
      <RadioButton setValue={props.setValue} />
    </View>
  );
};
export default AdvanceFilter;
