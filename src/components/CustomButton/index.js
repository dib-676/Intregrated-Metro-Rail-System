import {TouchableOpacity, Text} from 'react-native';
import style from './style';
const CustomButton = (props: any) => {
  return (
    <TouchableOpacity
      style={{...style.btnContainer, ...props?.style?.btnContainer}}
      activeOpacity={0.8}>
      <Text style={{...style.btnTxt, ...props?.style?.btnTxt}}>
        {props?.label}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
