import axios from 'axios';

// const localhost = 'http://localhost:3001/';

const vercel = 'https://musics-library.vercel.app/';

export default async function getFromDeezer(url: string) {
  const response = await axios
    .get(`${vercel}`, {
      headers: { url },
    })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    });
  return response;
}
