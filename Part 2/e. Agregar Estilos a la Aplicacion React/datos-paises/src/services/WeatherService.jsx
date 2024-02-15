import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const get = async (city) => {
  const response = await axios.get(`${baseUrl}?q=${city}&appid=${apiKey}`);
  return response.data;
};

export default {
    get
};