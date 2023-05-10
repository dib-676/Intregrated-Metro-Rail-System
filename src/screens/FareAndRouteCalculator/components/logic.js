import {useSelector} from 'react-redux';
import {useGetRoutePathQuery} from '../../../redux-toolkit/api/metroRouteApi';
import {useGetDistanceByNameQuery} from '../../../redux-toolkit/api/metroApi';
import {noidaStations} from '../../../constants';
import {
  API_KEY,
  BASE_URL,
  PRIMARY_URL,
  fetchBaseUrl,
  fetchUrl,
} from '../../../redux-toolkit/api/axiosConfig';

export const delhiStationList = async ({source, destination}) => {
  console.log('delhiStationList');
  const url = `${BASE_URL}route-get?from=${source}&to=${destination}`;
  const data = await fetchUrl
    .get(url, {
      method: 'get',
    })
    .then(response => JSON.stringify(response))
    .catch(error => console.log(error));
  const res = JSON.parse(data);
  const dist = distanceMetroCalculator(res?.data);
  console.log('stationList', res?.data);
  return data;
};

export const delhiMetroFareCalculator = ({source, destination}) => {
  try {
    const fareChart = require('../../../constants/stationName/delhiMetroFare.json');
    const fareInt = fareChart.route.filter(val => val.source == source)[0]
      .destination;
    const fare = fareInt.filter(val => val.destination == destination)[0].fare;
    return fare;
  } catch (error) {
    return 'Unable fetch Fare.';
  }
};

export const calculateLines = () => {
  const {source, destination} = useSelector((state: any) => state.metroReducer);
  let x1 = noidaStations.filter((val: any) => {
    return val.name == source;
  })[0].serial;
  let x2 = noidaStations.filter((val: any) => {
    return val.name == destination;
  })[0].serial;
  return Math.abs(x1 - x2);
};

export const noidaMetroFareCalculator = (lines: any) => {
  if (lines === 1) {
    return {normal: 10, special: 10};
  } else if (lines === 2) {
    return {normal: 15, special: 10};
  } else if (lines >= 3 && lines <= 6) {
    return {normal: 20, special: 15};
  } else if (lines >= 7 && lines <= 9) {
    return {normal: 30, special: 20};
  } else if (lines >= 10 && lines <= 16) {
    return {normal: 40, special: 30};
  } else {
    return {normal: 50, special: 40};
  }
};
