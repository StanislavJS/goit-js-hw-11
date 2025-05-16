import axios from 'axios';


export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    q: query,
    key: '50332373-9569dbbbff196a639bf3485f1',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(res => res.data)
    .catch(error => {
      throw new Error('Error!');
    });
  //
}