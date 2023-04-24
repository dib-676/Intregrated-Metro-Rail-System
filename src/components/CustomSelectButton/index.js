import {TouchableOpacity, View, Image, Text} from 'react-native';
import style from './style';
import { images } from '../../utils';
const CustomSelectButton = (props: any) => {
  return (
    <TouchableOpacity
      style={style.selectStation}
      activeOpacity={0.8}
      onPress={props.navigation}>
      <View style={style.iconView}>
        <Image source={props.icon} style={style.icon} />
      </View>
      <View style={style.cardSelectStationView}>
        <Text style={style.stationType}>{props.name}</Text>
        <View style={style.selectStationCard}>
          <Text style={style.selectStationCardTxt}>
            {props.stationName.length > 0
              ? props.stationName
              : 'Select Station'}
          </Text>
          <Image source={images.dropDown} style={style.selectStationCardImg} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CustomSelectButton;
