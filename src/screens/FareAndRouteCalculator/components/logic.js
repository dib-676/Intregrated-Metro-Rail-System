import {useSelector} from 'react-redux';
import {useGetRoutePathQuery} from '../../../redux-toolkit/api/metroRouteApi';
import {useGetDistanceByNameQuery} from '../../../redux-toolkit/api/metroApi';
import {noidaStations} from '../../../constants';

export const delhiStationList = () => {
  const {source, destination} = useSelector((state: any) => state.metroReducer);
  const {data} = useGetRoutePathQuery({
    source: source,
    destination: destination,
  });
  console.log('stationList', data);
  return data;
};

export const distanceUtilCalculator = (location: any) => {
  const {data} = useGetDistanceByNameQuery(location);
  console.log('distance', data);
  return data;
};

export const distanceMetroCalculator = (list: any) => {
  var dist = 0.0;
  for (let i = 0; i < list.path.length - 1; i++) {
    const location = {source: list.path[i], destination: list.path[i + 1]};
    const res = distanceUtilCalculator(location);
    dist += parseFloat(res.substring(0, res.length - 2));
  }
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
