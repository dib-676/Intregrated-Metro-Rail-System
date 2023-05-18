import {Image, TouchableOpacity, View} from 'react-native';
import CustomSelectButton from '../../../components/CustomSelectButton';
import {images} from '../../../utils';
import {
  setDestination,
  setSource,
  setSwipeStation,
} from '../../../redux-toolkit/reducers/metroSlice';
import style from './style';
const SelectStation = (props: any) => {
  return (
    <View style={style.selectStationView}>
      <CustomSelectButton
        name={'Depart From'}
        icon={images.openCircle}
        stationName={props.source}
        navigation={() =>
          props.navigation.navigate('StationList', {
            callback: props.type,
            searchType: 'Depart From',
          })
        }
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={style.flipView}
        onPress={() => {
          props.dispatch(
            setSwipeStation({
              type: props.type === 'firstLast' ? props.type : '',
            }),
          );
        }}>
        <Image source={images.exchange} style={style.flip} />
      </TouchableOpacity>
      <CustomSelectButton
        name={'Destination'}
        icon={images.closeCircle}
        stationName={props.destination}
        navigation={() =>
          props.navigation.navigate('StationList', {
            callback: props.type,
            searchType: 'Destination',
          })
        }
      />
    </View>
  );
};
export default SelectStation;
