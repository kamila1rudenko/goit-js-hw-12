import axios from 'axios';

const API_KEY = '50315100-ca810647875799483dbf10da6'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
console.log('PIXABAY RESPONSE:', response.data);
  return response.data.hits;
}