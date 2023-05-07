import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import style from './style';
import {dimensions, images, strings} from '../../../utils';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {distanceResolver1} from '../NMResolver';
const {vw, vh} = dimensions;
const NearestMetro = (props: any) => {
  const [dist, setDist] = useState([]);
  const {nearestStation} = props.route.params;
  const source = {location: {lat: 28.5638964, long: 77.334332}};
  const destination = {location: {lat: 28.5529418, long: 77.321595}};
  console.log(JSON.stringify(distanceResolver1(source, destination)));
  useEffect(() => {
    if (dist !== undefined) {
      setDist(nearestStation);
    }
  }, [nearestStation]);

  const renderItem = (item: any) => {
    const openMap = () => {
      Linking.openURL(
        `https://www.google.com/maps/search/?api=1&query=${item.location.lat},${item.location.long}`,
      );
    };
    return (
      <View style={style.renderItemCard}>
        <View style={style.card}>
          <Text style={{...style.cardTxt, ...style.cardTxtStName}}>
            {item.label}
          </Text>
          <Text style={style.cardTxt}>{item.data?.distance?.text}</Text>
        </View>
        <View style={style.card}>
          <TouchableOpacity style={style.btn} onPress={openMap}>
            <Image source={images.dirImg} style={style.dirImg} />
          </TouchableOpacity>
          <Text style={style.cardTxt}>{item.data?.duration?.text}</Text>
        </View>
      </View>
    );
  };
  const emptyComponent = () => {
    return (
      <View style={style.emptyComponent}>
        <Image source={images.warningImg} style={style.warningImg} />
        <Text style={style.emptyComponentMessage}>
          {strings.emptyNearestMetro}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.mainFrame}>
      <ScrollView>
        <FlatList
          style={{marginVertical: vh(10)}}
          data={dist}
          renderItem={({item}) => renderItem(item)}
          ListEmptyComponent={() => emptyComponent()}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NearestMetro;
