import { memo, useCallback, useEffect, useRef, useState } from 'react';

import getFromDeezer from '@src/services/getFromDeezer';
import { useArtistStore } from '@src/store/modules/artists';
import { useGenresStore } from '@src/store/modules/genres';
import { useMusicsStore } from '@src/store/modules/musics';
import { useUiStore } from '@src/store/modules/ui';
import cutAlbumAndTitle from '@src/utils/cutAlbumAndTitle';
import secondsToMinutes from '@src/utils/secondsToMinutes';

import * as S from './styles';

export const SideBar = memo(() => {
  const genres = useGenresStore((state) => state.genres);
  const artist = useArtistStore((state) => state.artist);
  const setArtist = useArtistStore((state) => state.setArtist);
  const setMainMusics = useMusicsStore((state) => state.setMainMusics);
  const toggleGenresSidebar = useUiStore((state) => state.toggleGenresSidebar);

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

  const drawerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [closeOverlay, setCloseOverlay] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  const handleClose = () => {
    drawerRef.current?.classList.add('closing');
    setCloseOverlay(false);

    setTimeout(() => {
      toggleGenresSidebar();
      setIsVisible(false);
    }, 200);
  };

  useEffect(() => {
    if (!firstRender) return;
    setFirstRender(false);
  }, [firstRender]);

  if (!isVisible) return null;

  return (
    <>
      <S.Overlay
        data-testid="filters-overlay"
        closeOverlay={closeOverlay}
        onClick={() => handleClose()}
      />
      <S.SidebarContainer ref={drawerRef}>
        <S.FilterHeader>
          <S.Title>Filtre por gênero e artista</S.Title>
          <S.ButtonsWrapper>
            {artist.length ? <S.Back onClick={() => setArtist([])} /> : null}
            <S.Close onClick={() => handleClose()} />
          </S.ButtonsWrapper>
        </S.FilterHeader>
        <S.List>
          {!artist.length
            ? genres.map((elem) => (
                <S.GenreCard
                  image={elem.picture_big}
                  key={elem.name}
                  onClick={() => getArtistsFromGenre(elem.id)}
                >
                  <S.Title>{elem.name}</S.Title>
                </S.GenreCard>
              ))
            : artist.map((elem) => (
                <S.GenreCard
                  image={elem.picture_big}
                  key={elem.name}
                  onClick={() => {
                    getMusicsByArtist(elem.id);
                    handleClose();
                  }}
                >
                  <S.Title>{elem.name}</S.Title>
                </S.GenreCard>
              ))}
        </S.List>
      </S.SidebarContainer>
    </>
  );
});
