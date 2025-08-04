import axios from 'axios';

const localhost = 'http://localhost:3001/';

// const netlify = 'https://preeminent-cobbler-35c194.netlify.app/';

export default async function getFromDeezer(url: string) {
  const response = await axios
    .get(`${localhost}`, {
      headers: { url },
    })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    });
  return response;
}
