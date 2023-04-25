import {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
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
const StationDashboard = ({navigation}: any) => {
  const {stationName, city} = useSelector((state: any) => state.metroReducer);
  const serviceLineData = getCity[city].filter(
    (val: any) => val.name == stationName,
  )[0];
  // const {data, error, isLoading} = useGetStationsQuery(stationName);
  // useEffect(() => {
  //   if (data !== undefined) {
  //     console.log('data', data);
  //   }
  // });
  console.log(serviceLineData.lineNumber);
  return (
    <SafeAreaView style={style.mainFrame}>
      <StationHeader
        onBackPress={() => navigation.goBack()}
        label={stationName}
      />
      <StationServiceAlert data={serviceLineData.lineNumber} />
      <StationMapView
        lat={serviceLineData.details.lat}
        long={serviceLineData.details.long}
        name={serviceLineData.name}
      />
    </SafeAreaView>
  );
};
export default StationDashboard;
