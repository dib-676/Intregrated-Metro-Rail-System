import {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {images} from '../../../utils';
import {useSelector} from 'react-redux';
import StationHeader from '../StationHeader';
import {getCity} from '../../../constants';
import StationServiceAlert from '../StationServiceAlert';
import StationMapView from '../StationMapView';
import {useGetStationsQuery} from '../../../redux-toolkit/api/metroApi';
import StationFooter from '../StationFooter';
import StationAbtractDetail from '../StationAbstactDetail';
const StationDashboard = ({navigation}: any) => {
  const {stationName, city} = useSelector((state: any) => state.metroReducer);
  const serviceLineData = getCity[city].filter(
    (val: any) => val.name == stationName,
  )[0];
  console.log(serviceLineData.lineNumber);
  return (
    <SafeAreaView style={style.mainFrame}>
      <ScrollView>
        <StationHeader
          onBackPress={() => navigation.goBack()}
          label={stationName}
        />
        {/* <StationServiceAlert data={serviceLineData.lineNumber} />
        <StationMapView
          lat={serviceLineData.details.lat}
          long={serviceLineData.details.long}
          name={serviceLineData.name}
        />
        <StationAbtractDetail data={serviceLineData.details.otherDetails} /> */}
      </ScrollView>
      <View style={style.footerScreen}>
        <StationFooter data={[]} />
      </View>
    </SafeAreaView>
  );
};
export default StationDashboard;
