import axios from 'axios';

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
  setLoading,
}: any) => {
  if (city === 'Delhi Metro') {
    axios
      .get(`${API_BASE_URL}/station/${station_code}`)
      .then(response => {
        setLoading(false);
        setStationDetail(response.data);
      })
      .catch(err => console.log(err));
  }
};
