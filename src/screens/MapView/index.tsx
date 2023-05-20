import ImageZoom from 'react-native-image-pan-zoom';
import {Image, SafeAreaView} from 'react-native';
import {images} from '../../utils';
import {vh, vw} from '../../utils/dimensions';

const MetroMapView = (props: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageZoom
        cropHeight={vh(400)}
        cropWidth={vw(400)}
        imageWidth={vw(360)}
        imageHeight={vh(500)}>
        <Image source={images.metroGMapImg} style={{width: 500, height: 500}} />
      </ImageZoom>
    </SafeAreaView>
  );
};
export default MetroMapView;
