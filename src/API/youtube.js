import axios from 'axios';

const KEY = 'AIzaSyAonNq5vlsUeTfaln9jroeg7HGticXs7mc';
//there are two types of API key secured and free

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
