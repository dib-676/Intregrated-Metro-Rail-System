import {useEffect, useState} from 'react';
import {
  useGetDistanceQuery,
  useGetStationsQuery,
} from '../../../redux-toolkit/api/metroApi';
import {useDispatch} from 'react-redux';
import {setStationData} from '../../../redux-toolkit/reducers/metroSlice';

export const getNearestStations = (props: any) => {
  const dispatch = useDispatch();
  const {data, isLoading} = useGetStationsQuery({
    lat: props.location.lat,
    long: props.location.long,
  });
  useEffect(() => {
    if (data !== undefined) {
      console.log(data.results);
      dispatch(setStationData(data.results));
    }
  }, [isLoading]);
};

export const distanceResolver = ({origin, dest}) => {
  console.log(origin, dest);
  const {data, isLoading} = useGetDistanceQuery({origin: origin, dest: dest});
  useEffect(() => {
    if (data !== undefined) {
      console.log(data);
      //   setDist(data.results);
    }
  }, [isLoading]);
  //   return stationData;
};
