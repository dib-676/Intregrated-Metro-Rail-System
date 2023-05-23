import {kolkataStations, noidaStations} from '../../../constants';
import {API_BASE_URL, fetchUrl} from '../../../redux-toolkit/api/axiosConfig';

export const delhiMetroFareCalculator = ({
  source,
  destination,
  value,
  setFare,
  setTime,
  setInterchange,
  setStation,
  setRoute,
}) => {
  console.log(source, destination);
  try {
    const url = `${API_BASE_URL}/new_fare_with_route/${source}/${destination}/${value}`;
    fetchUrl
      .get(url, {
        method: 'get',
      })
      .then(response => {
        setFare({
          weekday_fare: response.data.weekday_fare,
          weekend_fare: response.data.weekend_fare,
        });
        const time = response.data.total_time.split(':');
        const hour = parseInt(time[0]) * 60;
        const min = parseInt(time[1]);
        setTime((hour + min).toString());
        setStation(response.data.stations);
        setInterchange(response.data.route.length - 1);
        console.log(response.data);
        setRoute(response.data.route);
      })
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const calculateNoidaMetroFare = ({
  source,
  destination,
  setFare,
  setTime,
  setInterchange,
  setStation,
  setRoute,
}) => {
  let x1 = noidaStations.filter((val: any) => {
    return val.station_code == source;
  })[0].serial;
  let x2 = noidaStations.filter((val: any) => {
    return val.station_code == destination;
  })[0].serial;
  const fare = calculateNoidaMetroFareUtil(Math.abs(x1 - x2));
  setFare(fare);
  setStation(Math.abs(x1 - x2) + 1);
  setInterchange(0);
  const line = Math.abs(x1 - x2);
  const time = line * 3 + parseInt(line / 2);
  setTime(time);
  const start = x1 - x2 > 0 ? x2 : x1;
  const end = x1 - x2 > 0 ? x1 : x2;
  console.log(x1, x2, start, end);
  const path = noidaStations
    .slice(start, end + 1)
    .map(val => ({name: val.station_name, status: ''}));
  const route = [
    {
      line: 'Aqua Line',
      path: x1 - x2 < 0 ? path : path.reverse(),
      path_time: '0:' + time.toString() + ':0',
      start: 'NOIDA SEC-51',
      station_interchange_time: 0,
      towards_station: x1 - x2 < 0 ? 'Delport' : 'NOIDA SEC-51',
    },
  ];
  console.log(route);
  setRoute(route);
};

export const calculateNoidaMetroFareUtil = lines => {
  if (lines === 1) {
    return {weekday_fare: 10, weekend_fare: 10};
  } else if (lines === 2) {
    return {weekday_fare: 15, weekend_fare: 10};
  } else if (lines >= 3 && lines <= 6) {
    return {weekday_fare: 20, weekend_fare: 15};
  } else if (lines >= 7 && lines <= 9) {
    return {weekday_fare: 30, weekend_fare: 20};
  } else if (lines >= 10 && lines <= 16) {
    return {weekday_fare: 40, weekend_fare: 30};
  } else {
    return {weekday_fare: 50, weekend_fare: 40};
  }
};

export const calculateKolkataMetroFare = ({
  source,
  destination,
  setFare,
  setStation,
  setInterchange,
  setTime,
  setRoute,
}: any) => {
  let x1 = kolkataStations.filter((val: any) => {
    return val.station_code == source;
  })[0].serial;
  let x2 = kolkataStations.filter((val: any) => {
    return val.station_code == destination;
  })[0].serial;
  const fare = calculateKolkataMetroFareUtil(Math.abs(x1 - x2));
  setFare(fare);
  setStation(Math.abs(x1 - x2) + 1);
  setInterchange(0);
  const line = Math.abs(x1 - x2);
  const time = parseInt(line * 1.7685 + line / 2);
  setTime(time);
  const start = x1 - x2 > 0 ? x2 : x1;
  const end = x1 - x2 > 0 ? x1 : x2;
  const path = kolkataStations
    .slice(start, end + 1)
    .map(val => ({name: val.station_name, status: ''}));
  const route = [
    {
      line: 'Blue Line',
      path: x1 - x2 < 0 ? path : path.reverse(),
      path_time: '0:' + time.toString() + ':0',
      start: 'KAVI SUBHASH',
      station_interchange_time: 0,
      towards_station: 'DAKSHINESWAR',
    },
  ];
  console.log(route);
  setRoute(route);
};

export const calculateKolkataMetroFareUtil = lines => {
  if (lines === 1) {
    return {weekday_fare: 5, weekend_fare: 5};
  } else if (lines >= 2 && lines <= 7) {
    return {weekday_fare: 10, weekend_fare: 5};
  } else if (lines >= 8 && lines <= 13) {
    return {weekday_fare: 15, weekend_fare: 10};
  } else if (lines >= 14 && lines <= 19) {
    return {weekday_fare: 20, weekend_fare: 15};
  } else {
    return {weekday_fare: 25, weekend_fare: 20};
  }
};
