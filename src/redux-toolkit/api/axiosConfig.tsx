import axios from 'axios';
import {noidaStations} from '../../constants';

export const BASE_URL = 'https://backend.delhimetrorail.com';
export const API_BASE_URL = `${BASE_URL}/api/v2/en`;
export const PRIMARY_URL = 'https://maps.googleapis.com/maps/api';
export const API_KEY = 'AIzaSyDQCQegqjBTP_DgwIGjOKgZvLh7qaKu-N8';
export const fetchUrl = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const fetchBaseUrl = axios.create({
  baseURL: PRIMARY_URL,
  timeout: 1000,
});

export const useFetchStationList = (props: any) => {
  axios
    .get(`${API_BASE_URL}/station_list`)
    .then(response => {
      props.setData(response.data);
    })
    .catch(err => console.log(err));
};

export const fetchStationDetail = ({
  city,
  station_code,
  setStationDetail,
  dispatch,
  navigation,
}: // setLoading,
any) => {
  console.log('fetchStation', city);
  if (city === 'Delhi Metro') {
    console.log('fetch station x');
    axios
      .get(`${API_BASE_URL}/station/${station_code}`)
      .then(response => {
        // setLoading(false);
        dispatch(setStationDetail(response.data));
        navigation.navigate('StationDashboard');
      })
      .catch(err => console.log(err));
  } else if (city === 'Noida Metro') {
    console.log('fetch station x');
    const stationDetail = noidaStations.filter(
      val => val.station_code === station_code,
    )[0];
    dispatch(setStationDetail(stationDetail));
    navigation.navigate('StationDashboard');
  }
};
