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
const StationDashboard = ({navigation}: any) => {
  const {stationName, city} = useSelector((state: any) => state.metroReducer);
  const serviceLineData = getCity[city].filter(
    (val: any) => val.name == stationName,
  )[0];
  console.log(serviceLineData.lineNumber);
  return (
    <SafeAreaView style={style.mainFrame}>
      <StationHeader
        onBackPress={() => navigation.goBack()}
        label={stationName}
      />
      <StationServiceAlert data={serviceLineData.lineNumber} />
      <StationMapView />
    </SafeAreaView>
  );
};
export default StationDashboard;
