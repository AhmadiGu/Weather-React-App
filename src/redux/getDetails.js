import axios from 'axios';

const getDetalis = async (lat, lon) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?';

  try {
    const response = await axios.get(`${url}lat=${lat}&lon=${lon}&appid=422965f1bdf7e50a313aaa23c009d89a`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export default getDetalis;
