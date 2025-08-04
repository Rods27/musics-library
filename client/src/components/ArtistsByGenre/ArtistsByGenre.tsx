import React from 'react';
import Loader from 'react-js-loader';

import getFromDeezer from '../../services/getFromDeezer';
import { useMusicStoreTemp } from '../../store';
import cutAlbumAndTitle from '../../utils/cutAlbumAndTitle';
import secondsToMinutes from '../../utils/secondsToMinutes';
import { Title, Container, Card, LoaderDiv } from './styles';

function ArtistsByGenre({ history }: { history: any }) {
  const { artistsByGender: stateAristsByGender, setMusicsByGender } = useMusicStoreTemp();

  async function getMusicsByArtist(id: number) {
    const album = await getFromDeezer(`https://api.deezer.com/artist/${id}/top?limit=50`);
    cutAlbumAndTitle(album.data);
    secondsToMinutes(album.data);
    setMusicsByGender(album.data, false, true);
  }

  return (
    <Container>
      {stateAristsByGender && stateAristsByGender.length > 0 ? (
        stateAristsByGender.map((elem) => (
          <button key={elem.name} onClick={() => getMusicsByArtist(elem.id)}>
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

export default ArtistsByGenre;
