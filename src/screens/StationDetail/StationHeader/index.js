import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {images} from '../../../utils';
const StationHeader = (props: any) => {
  return (
    <ImageBackground style={style.stationNameView} source={images.streetView}>
      <TouchableOpacity style={style.backBtn} onPress={props.onBackPress}>
        <Image source={images.backBtn} style={style.backBtnImg} />
      </TouchableOpacity>
      <View style={style.metroCircleOuterLayer}>
        <View style={style.metroCircleInnerLayer}>
          <View style={style.stationNameLayer}>
            <Text style={style.stationNameTxt}>{props.label}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default StationHeader;
