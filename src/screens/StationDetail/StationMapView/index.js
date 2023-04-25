import MapView from 'react-native-maps';
import style from './style';
import {View} from 'react-native';

const StationMapView = () => {
  return (
    <View style={style.mapView}>
      <MapView
          
        initialRegion={{
          latitude: 28.44772,
          longitude: 77.524567,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
export default StationMapView;
