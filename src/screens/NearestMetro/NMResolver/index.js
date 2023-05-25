import {useEffect, useState} from 'react';
import {
  useGetDistanceQuery,
  useGetStationsQuery,
} from '../../../redux-toolkit/api/metroApi';
import {useDispatch, useSelector} from 'react-redux';
import {setStationData} from '../../../redux-toolkit/reducers/metroSlice';

export const getNearestStations = () => {
  const dispatch = useDispatch();
  const {location} = useSelector(state => state.metroReducer);
  const {data, isLoading} = useGetStationsQuery({
    lat: location.lat,
    long: location.long,
  });
  useEffect(() => {
    if (data !== undefined) {
      const stationData = data.results.map(val => {
        return {label: val.name, location: val.geometry.location};
      });
      console.log('Splash Call Nearest Station====> ', stationData);
      dispatch(setStationData(stationData));
    }
  }, [isLoading]);
};

export const distanceResolver = (stationData, location) => {
  console.log('1');
  const dist = stationData.map(val => {
    const {data} = useGetDistanceQuery({
      origin: {lat: location.lat, long: location.long},
      dest: {lat: val.location.lat, long: val.location.lng},
    });
    console.log(data?.rows[0]?.elements);
    return {
      label: val.label,
      data: data?.rows[0]?.elements[0],
      location: {lat: val.location.lat, long: val.location.lng},
    };
  });
  if (Object.keys(dist).length > 0) {
    return dist;
  }
};
export const distanceResolver1 = (source, destination) => {
  const {data} = useGetDistanceQuery({
    origin: {lat: source.location.lat, long: source.location.long},
    dest: {lat: destination.location.lat, long: destination.location.long},
  });
  console.log(`data =====> ${data?.rows[0]?.elements}`);
  return data;
};
