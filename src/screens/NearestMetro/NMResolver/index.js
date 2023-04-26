import {useEffect, useState} from 'react';
import {
  useGetDistanceQuery,
  useGetStationsQuery,
} from '../../../redux-toolkit/api/metroApi';

export const getNearestStations = (props: any) => {
  const [stationData, setStationData] = useState([]);
  const {data, isLoading} = useGetStationsQuery({
    lat: props.location.lat,
    long: props.location.long,
  });
  useEffect(() => {
    if (data !== undefined) {
      console.log(data.results);
      setStationData(data.results);
    }
  });
  return stationData;
};

export const distanceResolver = ({origin, dest}) => {
  const [dist, setDist] = useState([]);
  const {data, isLoading} = useGetDistanceQuery({origin: origin, dest: dest});
  useEffect(() => {
    if (data !== undefined) {
      console.log(data);
      //   setDist(data.results);
    }
  });
  //   return stationData;
};
