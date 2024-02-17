import axios from 'axios';
export let totalHits;

export default async function fetchImages(search, page, perPage) {
  const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });

  const API_KEY = '42241202-737945e445eb9c5ec6bcca7e8';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&${params}`;

  const response = await axios.get(URL);
  totalHits = response.data.totalHits;
  return response.data;
}
