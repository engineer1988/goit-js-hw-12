import axios from 'axios';

export default async function fetchImages(search, params) {
  const API_KEY = '42241202-737945e445eb9c5ec6bcca7e8';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&${params}`;

  const response = await axios.get(URL);
  return response.data;
}
