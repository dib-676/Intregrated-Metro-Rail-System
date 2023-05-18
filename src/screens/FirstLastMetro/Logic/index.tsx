import {noidaStations} from '../../../constants';
import {API_BASE_URL, fetchUrl} from '../../../redux-toolkit/api/axiosConfig';

export const calculateFLMDelhi = ({
  source,
  destination,
  value,
  setFirst,
  setLast,
  setState,
  setLoading,
}: any) => {
  console.log('source: ', source);
  console.log('destination: ', destination);
  console.log('value: ', value);
  try {
    const url = `${API_BASE_URL}/first_and_last_train_with_filter/${source}/${destination}/${value}`;
    fetchUrl
      .get(url, {
        method: 'get',
      })
      .then(response => {
        setState(true);
        setLoading(false);
        console.log(response.data);
        setFirst(
          response?.data?.first_train?.first_train_route_detail[0]?.start_time,
        );
        setLast(
          response?.data?.last_train?.last_train_route_detail[0]?.start_time,
        );
      })
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const calculateFLMNoida = ({
  source,
  destination,
  value,
  setFirst,
  setLast,
  setState,
  setLoading,
}: any) => {
  let x1 = noidaStations.filter((val: any) => {
    return val.station_code == source;
  })[0].serial;
  let x2 = noidaStations.filter((val: any) => {
    return val.station_code == destination;
  })[0].serial;
  console.log(noidaStations);
  noidaStations.filter(val => {
    if (val.station_code === source) {
      x2 > x1
        ? (setFirst(val.first_Train['Toward DELPORT']),
          setLast(val.last_Train['Toward DELPORT']))
        : (setFirst(val.first_Train['Toward NOIDA NOIDA SECTOR 51']),
          setLast(val.last_Train['Toward NOIDA NOIDA SECTOR 51']));
    }
  });
  setState(true);
  setLoading(false);
};
export const calculateFLMKolkata = ({
  source,
  destination,
  value,
  setFirst,
  setLast,
  setState,
  setLoading,
}: any) => {};
