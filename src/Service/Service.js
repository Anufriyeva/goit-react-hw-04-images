import axios from 'axios';

const API_KEY = '38734674-7bb0a4a530548aef0bc7ad612';
const BASE_URL = 'https://pixabay.com/api/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  },
});

export const fetchImages = async (value, page) => {
  try {
    const { data } = await api.get('', {
      params: {
        q: value,
        page,
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};