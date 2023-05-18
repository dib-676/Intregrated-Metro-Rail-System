import {useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import style from './style';
const CustomDateTimePicker = (props: any) => {
  const [visible, setVisible] = useState(false);
  const showModel = () => {
    setVisible(true);
  };
  const hideModel = () => {
    setVisible(false);
  };
  const handleConfirm = (response: any) => {
    props.mode === 'date'
      ? props.response(response.toLocaleDateString())
      : props.response(response.toLocaleTimeString());
    hideModel();
    props.mode === 'date' && props.day(response.getDay());
  };
  return (
    <>
      <TouchableOpacity
        style={style.dateTimePickerView}
        activeOpacity={0.8}
        onPress={showModel}>
        <Text style={style.type}>{`Select ${props.mode}`}</Text>
        <View style={style.dateTimePickerIconView}>
          <Text style={style.value}>{props.value}</Text>
          <Image source={props.icon} style={style.date_time_icon} />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={visible}
        mode={props.mode}
        onConfirm={handleConfirm}
        onCancel={hideModel}
      />
    </>
  );
};
export default CustomDateTimePicker;
