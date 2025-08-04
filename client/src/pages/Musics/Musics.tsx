import React, { useEffect } from 'react';
import Loader from 'react-js-loader';
import { useNavigate } from 'react-router-dom';

import { useMusicsStore } from '@src/store/modules';

import {
  MainMusics,
  Header,
  GenresList,
  QueryMusics,
  ArtistsByGenre,
  MusicsByGenre,
} from '../../components';
import { useMusicStoreTemp } from '../../store';
import { fetchGenresToZustand, fetchMusicsToZustand } from '../../utils/fetchToRedux';
import {
  Container,
  MinorContainer,
  GenresTitle,
  MainMusicsTitle,
  TitleContainer,
  LoaderDiv,
  BackWardDiv,
} from './styles';

function Musics() {
  const navigate = useNavigate();
  const {
    renderQuery,
    renderArtists,
    renderMusics,
    genres: stateGenres,
    setRenderState,
  } = useMusicStoreTemp();

  const mainMusics = useMusicsStore((state) => state.mainMusics);
  console.log(mainMusics);

  useEffect(() => {
    fetchGenresToZustand();
    fetchMusicsToZustand();
  }, []);

  const manipulateRender = (artists: boolean, musics: boolean) => {
    setRenderState(artists, musics);
  };

  return (
    <Container>
      AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      <Header history={{ push: navigate }} />
      {mainMusics.length > 0 && stateGenres.length > 0 ? (
        <div>
          <TitleContainer>
            <BackWardDiv onClick={() => manipulateRender(false, false)}>
              <i className="fas fa-backward"></i>
            </BackWardDiv>
            <GenresTitle>Generos</GenresTitle>
            <MainMusicsTitle>Principais Músicas</MainMusicsTitle>
          </TitleContainer>
          <MinorContainer>
            {!renderMusics && !renderArtists ? (
              <GenresList history={{ push: navigate }} />
            ) : renderArtists ? (
              <ArtistsByGenre history={{ push: navigate }} />
            ) : (
              <MusicsByGenre history={{ push: navigate }} />
            )}
            {renderQuery ? <QueryMusics history={{ push: navigate }} /> : <MainMusics />}
          </MinorContainer>
        </div>
      ) : (
        <LoaderDiv>
          <Loader type="spinner-cub" bgColor={'#333'} size={String(120)} />
        </LoaderDiv>
      )}
    </Container>
  );
}

export default Musics;
