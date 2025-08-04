import React from 'react';
import Loader from 'react-js-loader';

import getFromDeezer from '../../services/getFromDeezer';
import { useMusicStoreTemp } from '../../store';
import { Title, Container, Card, LoaderDiv } from './styles';

function GenresList({ history }: { history: any }) {
  const { genres: stateGenres, setArtistsByGender } = useMusicStoreTemp();

  async function getArtistsFromGenre(id: number) {
    const artists = await getFromDeezer(`https://api.deezer.com/genre/${id}/artists`);
    setArtistsByGender(artists.data, true, false);
  }

  return (
    <Container>
      {stateGenres && stateGenres.length > 0 ? (
        stateGenres.map((elem) => (
          <button key={elem.name} onClick={() => getArtistsFromGenre(elem.id)}>
            <Card style={{ backgroundImage: `url(${elem.picture_big})` }}>
              <Title>{elem.name}</Title>
            </Card>
          </button>
        ))
      ) : (
        <LoaderDiv>
          <Loader type="spinner-cub" bgColor={'#FFFF'} size={100} />
        </LoaderDiv>
      )}
    </Container>
  );
}

export default GenresList;
