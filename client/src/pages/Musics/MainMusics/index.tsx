import { useRef } from 'react';
import Loader from 'react-js-loader';

import HeartEmpty from '@src/components/HeartEmpty';
import HeartFilled from '@src/components/HeartFilled';
import Pause from '@src/components/Pause';
import Play from '@src/components/Play';
import { useListenAudio } from '@src/hooks/useListenAudio';
import { useFavoritesStore, useMusicsStore } from '@src/store/modules';

import * as S from './styles';

function MainMusics() {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const mainMusics = useMusicsStore((state) => state.mainMusics);
  const favorites = useFavoritesStore((state) => state.favorites);
  const setFavorites = useFavoritesStore((state) => state.setFavorites);

  const { handlePlayPause, setAudioRef, playingId } = useListenAudio(audioRefs);

  return (
    <S.Container>
      {mainMusics.length ? (
        mainMusics.map((elem) => (
          <S.Card key={elem.id}>
            <a href={elem.artist.link} target="blank">
              <i className="fab fa-deezer deezer"></i>
            </a>
            <img src={elem.album.cover_medium} alt={`${elem.name}`} draggable={false} />
            <S.InfosWrapper>
              <S.Infos>
                <h4 title={elem.title}>{elem.title}</h4>
                <span title={elem.album.title}>{elem.album.title}</span>
                <span title={elem.artist.name}>{elem.artist.name}</span>
                <span id="duration">{elem.duration}</span>
              </S.Infos>
              <S.ButtonsWrapper>
                <S.FavoritesWrapper onClick={() => setFavorites(elem)}>
                  {favorites.filter((f) => f.id === elem.id).length ? (
                    <HeartFilled size={30} />
                  ) : (
                    <HeartEmpty size={30} />
                  )}
                </S.FavoritesWrapper>
                <S.PlayPauseWrapper onClick={() => handlePlayPause(String(elem.id))}>
                  {playingId === String(elem.id) ? <Pause size={33} /> : <Play size={33} />}
                </S.PlayPauseWrapper>
              </S.ButtonsWrapper>
            </S.InfosWrapper>
            <audio
              ref={setAudioRef(String(elem.id))}
              src={elem.preview}
              preload="auto"
              id={String(elem.id)}
            />
          </S.Card>
        ))
      ) : (
        <S.LoaderDiv>
          <Loader type="spinner-cub" bgColor={'#FFFF'} size={String(100)} />
        </S.LoaderDiv>
      )}
    </S.Container>
  );
}

export default MainMusics;
