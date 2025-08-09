import { useCallback } from 'react';

import { useMusicsStore } from '@src/store/modules';
import { useArtistStore } from '@src/store/modules/artists';
import { useGenresStore } from '@src/store/modules/genres';
import { useUiStore } from '@src/store/modules/ui';
import cutAlbumAndTitle from '@src/utils/cutAlbumAndTitle';
import secondsToMinutes from '@src/utils/secondsToMinutes';

import getFromDeezer from '../../../services/getFromDeezer';
import { Title, Container, Card } from './styles';

function GenresList() {
  const genres = useGenresStore((state) => state.genres);
  const artist = useArtistStore((state) => state.artist);
  const setArtist = useArtistStore((state) => state.setArtist);
  const setMainMusics = useMusicsStore((state) => state.setMainMusics);
  const isSidebarOpen = useUiStore((state) => state.isGenresSidebarOpen);

  const getArtistsFromGenre = useCallback(
    async (id: number) => {
      const artists = await getFromDeezer(`https://api.deezer.com/genre/${id}/artists`);
      setArtist(artists.data);
    },
    [setArtist],
  );

  const getMusicsByArtist = useCallback(
    async (id: number) => {
      const album = await getFromDeezer(`https://api.deezer.com/artist/${id}/top?limit=50`);
      cutAlbumAndTitle(album.data);
      secondsToMinutes(album.data);
      setMainMusics(album.data);
    },
    [setMainMusics],
  );

  if (isSidebarOpen) return null;

  return (
    <Container>
      {!artist.length
        ? genres.map((elem) => (
            <button key={elem.name} onClick={() => getArtistsFromGenre(elem.id)}>
              <Card style={{ backgroundImage: `url(${elem.picture_big})` }}>
                <Title>{elem.name}</Title>
              </Card>
            </button>
          ))
        : artist.map((elem) => (
            <button key={elem.name} onClick={() => getMusicsByArtist(elem.id)}>
              <Card style={{ backgroundImage: `url(${elem.picture_big})` }}>
                <Title>{elem.name}</Title>
              </Card>
            </button>
          ))}
    </Container>
  );
}

export default GenresList;
