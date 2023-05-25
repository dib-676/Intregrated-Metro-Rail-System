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
  // const [stationDetail, setStationDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const {station_stCode, city, stationDetail} = useSelector(
    (state: any) => state.metroReducer,
  );

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
            <StationMapView
              lat={stationDetail?.latitude}
              long={stationDetail?.longitude}
              name={stationDetail?.station_name}
            />
            <StationAbtractDetail data={stationDetail} />
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
