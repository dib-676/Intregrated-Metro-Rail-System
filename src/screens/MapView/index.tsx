import ImageZoom from 'react-native-image-pan-zoom';
import {Image, SafeAreaView, Text} from 'react-native';
import {images} from '../../utils';
import {vh, vw} from '../../utils/dimensions';
import {useCallback, useState} from 'react';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import style from './style';

const MetroMapView = (props: any) => {
  const {city} = props.route.params;
  const [scale, setScale] = useState(1);
  const [focalX, setFocalX] = useState(0);
  const [focalY, setFocalY] = useState(0);

  const onPinchGestureEvent = useCallback((event: any) => {
    setScale(event.nativeEvent.scale);
    setFocalX(event.nativeEvent.focalX);
    setFocalY(event.nativeEvent.focalY);
  }, []);
  const metroMap: any = {
    'Delhi Metro': images.delhiMetroMapImg,
    'Noida Metro': images.noidaMetroMapImg,
    'Kolkata Metro': images.kolkataMetroMapImg,
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Image
        source={metroMap[city]}
        style={{width: vw(360), height: vh(778)}}
      /> */}
      <GestureHandlerRootView style={style.container}>
        <PinchGestureHandler
          onGestureEvent={onPinchGestureEvent}
          onHandlerStateChange={onPinchGestureEvent}>
          <Image
            source={metroMap[city]}
            style={[
              style.image,
              {
                transform: [
                  {scale: scale},
                  {translateX: focalX},
                  {translateY: focalY},
                ],
              },
            ]}
          />
        </PinchGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
export default MetroMapView;
