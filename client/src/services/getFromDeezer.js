import axios from 'axios';

const localhost = 'http://localhost:3001/'

// const heroku = "http://rods27-musics-library.herokuapp.com/"

export default async function getFromDeezer(url) {
  const response = await axios.get(`${localhost}`, {
    headers: { url }
  })
    .then((response) => response.data)
    .catch(console.error);
  return response;
}