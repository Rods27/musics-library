import axios from 'axios';

// const localhost = 'http://localhost:3001/'
const heroku = 'https://rods27-musics-library.herokuapp.com/';

export default async function getFromDeezer(url) {
  const response = await axios.get(`${heroku}`, {
    headers: { url }
  })
    .then((response) => response.data)
    .catch(console.error);
  return response;
}