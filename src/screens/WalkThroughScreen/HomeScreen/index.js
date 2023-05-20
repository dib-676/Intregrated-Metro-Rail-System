import {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors, images, strings} from '../../../utils';
import CustomDateTimePicker from '../../../components/CustomDateTimePicker';
import style from './style';
import SelectStation from '../SelectStation';
import {homeScreenHeader} from '../../../routes/headers';
import {
  cityList,
  drawerComponents,
  fareChart,
  serviceItem,
} from '../../../constants';
import MetroServices from '../Metro Services';
import CustomButton from '../../../components/CustomButton';
import {
  distanceResolver,
  getNearestStations,
} from '../../NearestMetro/NMResolver';
import {
  setCity,
  setReset,
  setSource,
} from '../../../redux-toolkit/reducers/metroSlice';
import {
  delhiMetroFareCalculator,
  delhiStationList,
} from '../../FareAndRouteCalculator/components/logic';
import Toast from 'react-native-simple-toast';
import RadioButton from '../../../components/RadioButton';
import AdvanceFilter from '../AdvanceFilter';
import MetroMap from '../../MetroMap';

const attributes = {
  needBottomBorder: true,
  icon: images.metroLogo,
  cityList: cityList,
  drawerEnabled: true,
  drawerComponents: drawerComponents,
};

const HomeScreen = ({navigation}) => {
  const {
    source,
    destination,
    source_stCode,
    destination_stCode,
    location: curr_location,
    stationData,
    city,
  } = useSelector(state => state.metroReducer);
  const dispatch = useDispatch();
  const [isLoad, setLoad] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [value, setValue] = useState('least-distance');
  const [day, setDay] = useState(new Date().getDay());
  useLayoutEffect(() => {
    homeScreenHeader({navigation, attributes});
  }, []);

  let dist;
  if (stationData.length > 0) {
    dist = distanceResolver(stationData, curr_location);
  }

  const onPressFare = async value => {
    if (source === '' && destination === '') {
      Toast.show('Please Select Source');
    } else if (source !== '' && destination === '') {
      Toast.show('Please Select Destination');
    } else if (source === '' && destination !== '') {
      Toast.show('Please Select Source');
    } else if (source !== '' && destination !== '') {
      navigation.navigate('FareAndRoute', {day: day, value: value});
    }
  };

  const reset = () => {
    dispatch(setReset());
  };
  const handleAction = () => {
    console.log('1');
    navigation.navigate('MetroMapView');
  };
  console.log(`day === ${day}`);
  console.log(`Advance Filters === ${value}`);
  return (
    <SafeAreaView style={style.mainFrame}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            colors={[colors.aqua]}
            refreshing={isLoad}
            onRefresh={() => {
              setLoad(true);
              setTimeout(() => {
                setLoad(false);
              }, 1000);
            }}
          />
        }>
        <View style={style.planYourJourney}>
          <Text style={style.planJourney}>{strings.planJourney}</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => reset()}>
            <Text style={{...style.planJourney, ...style.reset}}>
              {'Reset'}
            </Text>
          </TouchableOpacity>
        </View>
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
            day={setDay}
          />
          <CustomDateTimePicker
            mode={strings.modeTime}
            value={time}
            response={setTime}
            icon={images.time}
          />
        </View>

        <AdvanceFilter setValue={setValue} />

        <CustomButton
          label={strings.show_route_and_fare}
          onPress={() => onPressFare(value)}
        />

        <View style={style.bottomPart}>
          <MetroServices
            data={serviceItem}
            navigation={navigation}
            nearestStation={dist}
          />
          <MetroMap
            city={city}
            style={style.metroMap}
            icon={{icon: images.metroMapImg, style: style.metroMapImg}}
            handleAction={handleAction}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
