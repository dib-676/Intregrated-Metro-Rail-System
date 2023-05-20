import {TouchableOpacity, Image} from 'react-native';
import {images} from '../../utils';

const MetroMap = (props: any) => {
  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={0.8}
      onPress={props.handleAction}>
      <Image source={props.icon.icon} style={props.icon.style} />
    </TouchableOpacity>
  );
};
export default MetroMap;
