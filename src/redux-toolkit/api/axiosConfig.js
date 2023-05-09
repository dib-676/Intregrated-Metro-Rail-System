import axios from 'axios';

export const BASE_URL = 'https://us-central1-delhimetroapi.cloudfunctions.net/';
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
