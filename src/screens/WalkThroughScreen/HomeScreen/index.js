import {useLayoutEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {images, strings} from '../../../utils';
import CustomDateTimePicker from '../../../components/CustomDateTimePicker';
import style from './style';
import SelectStation from '../SelectStation';
import {homeScreenHeader} from '../../../routes/headers';
import {cityList, drawerComponents, serviceItem} from '../../../constants';
import MetroServices from '../Metro Services';
import Geolocation from '@react-native-community/geolocation';
import CustomButton from '../../../components/CustomButton';
import {
  distanceResolver,
  getNearestStations,
} from '../../NearestMetro/NMResolver';
const attributes = {
  needBottomBorder: true,
  icon: images.metroLogo,
  cityList: cityList,
  drawerEnabled: true,
  drawerComponents: drawerComponents,
};
const HomeScreen = ({navigation}) => {
  const {source, destination, location} = useSelector(
    state => state.metroReducer,
  );
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useLayoutEffect(() => {
    homeScreenHeader({navigation, attributes});
  }, []);
  const newlocation = getNearestStations({location});

  if (newlocation.length !== 0) {
    const x = newlocation[0].geometry.location;
    distanceResolver({origin: {lat: x.lat, long: x.lng}, dest: location});
  }
  return (
    <SafeAreaView style={style.mainFrame}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.planJourney}>{strings.planJourney}</Text>
        <SelectStation
          navigation={navigation}
          source={source}
          destination={destination}
          dispatch={dispatch}
        />
        <View style={style.dateTimerView}>
          <CustomDateTimePicker
            mode={strings.modeDate}
            value={date}
            response={setDate}
            icon={images.date}
          />
          <CustomDateTimePicker
            mode={strings.modeTime}
            value={time}
            response={setTime}
            icon={images.time}
          />
        </View>

        <CustomButton label={strings.show_route_and_fare} />

        <View style={style.bottomPart}>
          <MetroServices data={serviceItem} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
