import {useEffect, useState} from 'react';
import {
  useGetDistanceQuery,
  useGetStationsQuery,
} from '../../../redux-toolkit/api/metroApi';
import {useDispatch} from 'react-redux';
import {setStationData} from '../../../redux-toolkit/reducers/metroSlice';

export const getNearestStations = props => {
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
  const [dist, setDist] = useState({});
  const {data, isLoading} = useGetDistanceQuery({origin: origin, dest: dest});
  useEffect(() => {
    if (data !== undefined) {
      setDist({...data.rows[0].elements[0]});
    }
  }, [isLoading]);
  if (Object.keys(dist).length !== 0) {
    return dist;
  }
};
