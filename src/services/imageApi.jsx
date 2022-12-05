import axios from 'axios';

const API_KEY = '30679800-1fd8a93b87369129f70e2b6b6';

export const fetchImage = (page, query) => {
  return axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    },
  });
};
