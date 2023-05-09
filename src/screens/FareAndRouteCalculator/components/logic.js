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

export const distanceUtilCalculator = async (location: any) => {
  console.log(location);
  const metroKeyword = 'Metro Station';
  const url = `${PRIMARY_URL}/distancematrix/json?units=metric&origins=${location.source} ${metroKeyword} &destinations=${location.destination} ${metroKeyword}&key=${API_KEY}`;
  const data = await fetchBaseUrl(url, {
    method: 'get',
  });
  // const {data} = useGetDistanceByNameQuery(location);
  console.log('distance', data?.data?.rows[0]?.elements[0]?.distance?.text);
  return data?.data?.rows[0]?.elements[0]?.distance?.text;
};

export const distanceMetroCalculator = async (list: any) => {
  var dist = 0.0;
  for (let i = 0; i < list.path.length - 1; i++) {
    const location = {source: list.path[i], destination: list.path[i + 1]};
    const res = await distanceUtilCalculator(location);
    console.log('res', res);
    dist += parseFloat(res.substring(0, res.length - 2));
  }
  console.log('dist', dist);
  return dist;
};

export const delhiMetroFareCalculator = (dist: any) => {
  if (dist > 0 && dist <= 2) {
    return {normal: 10, special: 10};
  } else if (dist > 2 && dist <= 5) {
    return {normal: 20, special: 10};
  } else if (dist > 5 && dist <= 12) {
    return {normal: 30, special: 20};
  } else if (dist < 12 && dist <= 21) {
    return {normal: 40, special: 30};
  } else if (dist > 21 && dist <= 32) {
    return {normal: 50, special: 40};
  } else {
    return {normal: 60, special: 50};
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
