import {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import style from './style';
import {useSelector} from 'react-redux';
import StationHeader from '../StationHeader';
import {getCity} from '../../../constants';
import StationFooter from '../StationFooter';
import StationAbtractDetail from '../StationAbstactDetail';
import StationServiceAlert from '../StationServiceAlert';
import StationMapView from '../StationMapView';
import {fetchStationDetail} from '../../../redux-toolkit/api/axiosConfig';
const StationDashboard = ({navigation}: any) => {
  const [stationDetail, setStationDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {station_stCode, city} = useSelector(
    (state: any) => state.metroReducer,
  );
  useEffect(() => {
    setLoading(true);
    fetchStationDetail({
      city: city,
      station_code: station_stCode,
      setStationDetail: setStationDetail,
      setLoading: setLoading,
    });
  }, []);

  console.log('stationDetail ==== >', stationDetail);
  console.log('loading ==== >', loading);

  return (
    <SafeAreaView style={style.mainFrame}>
      <ScrollView>
        {Object.keys(stationDetail).length > 0 && (
          <>
            <StationHeader
              onBackPress={() => navigation.goBack()}
              label={stationDetail?.station_name}
            />
            <StationServiceAlert data={stationDetail?.metro_lines} />
            {/* <StationMapView
              lat={serviceLineData.details.lat}
              long={serviceLineData.details.long}
              name={serviceLineData.name}
            />
            <StationAbtractDetail data={serviceLineData.details.otherDetails} /> */}
          </>
        )}
      </ScrollView>
      <View style={style.footerScreen}>
        <StationFooter data={[]} />
      </View>
    </SafeAreaView>
  );
};
export default StationDashboard;
