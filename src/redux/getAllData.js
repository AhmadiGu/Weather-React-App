import axios from 'axios';

const url = 'https://restcountries.com/v2/all';

const getData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
export default getData;
