import MapView, {Marker} from 'react-native-maps';
import style from './style';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import {images} from '../../../utils';
import {useState} from 'react';

const StationMapView = (props: any) => {
  const [state, setState] = useState({
    lat: 0.00922,
    long: 0.00922,
  });
  const onPressZoomIn = () => {
    state.lat > 0.00000922 &&
      state.long > 0.00000922 &&
      setState({...state, lat: state.lat / 10, long: state.long / 10});
  };
  const onPressZoomOut = () => {
    state.lat < 0.00922 &&
      state.long < 0.00922 &&
      setState({...state, lat: state.lat * 10, long: state.long * 10});
  };
  console.log(state);
  return (
    <View style={style.mapView}>
      <MapView
        style={style.map}
        initialRegion={{
          latitude: props.lat,
          longitude: props.long,
          latitudeDelta: state.lat,
          longitudeDelta: state.long,
        }}
        region={{
          latitude: props.lat,
          longitude: props.long,
          latitudeDelta: state.lat,
          longitudeDelta: state.long,
        }}
        zoomEnabled={true}>
        <Marker
          draggable
          tracksViewChanges={true}
          coordinate={{
            latitude: props.lat,
            longitude: props.long,
          }}
          title={props.name + ' Metro Station'}
        />
      </MapView>
      <TouchableOpacity
        style={{...style.zoomInOut, ...style.zoomIn}}
        onPress={onPressZoomIn}>
        <Image source={images.plus} style={style.zoomIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{...style.zoomInOut, ...style.zoomOut}}
        onPress={onPressZoomOut}>
        <Image source={images.minus} style={style.zoomIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default StationMapView;
