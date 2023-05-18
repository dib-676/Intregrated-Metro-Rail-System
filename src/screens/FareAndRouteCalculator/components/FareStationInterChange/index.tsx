import {View, Text, Image} from 'react-native';
import style from './style';
import {images, strings} from '../../../../utils';
interface FareModule {
  fare: string;
  station: string | number;
  interchange: string | number | undefined;
}

const FareStationInterChange = (props: FareModule) => {
  return (
    <View style={style.mainFrame}>
      <View style={style.card}>
        <Image source={images.fareImg} style={style.fareImg} />
        <View>
          <Text style={style.headerCard}>{strings.fare}</Text>
          <Text style={style.headerCardTxt}>
            {'₹ '}
            {props.fare}
          </Text>
        </View>
      </View>
      <View style={style.card}>
        <View></View>
        <View>
          <Text style={style.headerCard}>{strings.station}</Text>
          <Text style={style.headerCardTxt}>{props.station}</Text>
        </View>
      </View>
      {props.interchange !== 0 && (
        <View style={style.card}>
          <View></View>
          <View>
            <Text style={style.headerCard}>{strings.interchange}</Text>
            <Text style={style.headerCardTxt}>{props.interchange}</Text>
          </View>
        </View>
      )}
    </View>
  );
};
export default FareStationInterChange;
