import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';
import {useState} from 'react';
const RadioButton = (props: any) => {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const {setValue} = props;
  const RadioItem = (props: any) => (
    <TouchableOpacity
      style={style.radioView}
      activeOpacity={0.9}
      onPress={() =>
        props.itemCode === '1'
          ? (setState1(true), setState2(false), setValue('least-distance'))
          : (setState1(false), setState2(true), setValue('minimum-interchange'))
      }>
      <View style={style.outerCircle}>
        {props.state && <View style={style.innerCircle} />}
      </View>
      <Text style={style.radioLabel}>{props.itemName}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={style.radioGroup}>
      <RadioItem itemName={'Shortest Route'} state={state1} itemCode={'1'} />
      <RadioItem
        itemName={'Minimium InterChange'}
        state={state2}
        itemCode={'2'}
      />
    </View>
  );
};
export default RadioButton;
