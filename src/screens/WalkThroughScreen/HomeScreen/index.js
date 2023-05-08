import {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
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

const delhiMetroLine = require('../../../constants/stationName/delhiMetro.json');
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
    location: curr_location,
    stationData,
    city,
  } = useSelector(state => state.metroReducer);
  const dispatch = useDispatch();
  const [isLoad, setLoad] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useLayoutEffect(() => {
    homeScreenHeader({navigation, attributes});
  }, []);

  var dist;
  if (stationData.length > 0) {
    dist = distanceResolver(stationData, curr_location);
  }

  const onPressFare = () => {
    if (source != '' && destination != '') {
      const fare = fareChart[city];
      console.log(`fare === ${fare}`);
    }
  };

  const reset = () => {
    dispatch(setReset());
  };

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
          />
          <CustomDateTimePicker
            mode={strings.modeTime}
            value={time}
            response={setTime}
            icon={images.time}
          />
        </View>

        <CustomButton
          label={strings.show_route_and_fare}
          onPress={() => onPressFare()}
        />

        <View style={style.bottomPart}>
          <MetroServices
            data={serviceItem}
            navigation={navigation}
            nearestStation={dist}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
