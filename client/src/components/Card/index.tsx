import { useRef } from 'react';

import HeartEmpty from '@src/components/HeartEmpty';
import HeartFilled from '@src/components/HeartFilled';
import Pause from '@src/components/Pause';
import Play from '@src/components/Play';
import { useListenAudio } from '@src/hooks/useListenAudio';
import type { IMusics } from '@src/interfaces/musics';
import { useFavoritesStore } from '@src/store/modules';

import * as S from './styles';

export const Card = ({ music }: { music: IMusics }) => {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const favorites = useFavoritesStore((state) => state.favorites);
  const setFavorites = useFavoritesStore((state) => state.setFavorites);

  const { handlePlayPause, setAudioRef, playingId } = useListenAudio(audioRefs);

  return (
    <S.Card key={music.id}>
      <S.LinkIconWrapper href={music.artist.link} target="blank">
        <S.LinkIcon />
      </S.LinkIconWrapper>
      <img src={music.album.cover_medium} alt={`${music.name}`} draggable={false} />
      <S.InfosWrapper>
        <S.Infos>
          <h4 title={music.title}>{music.title}</h4>
          <span title={music.album.title}>{music.album.title}</span>
          <span title={music.artist.name}>{music.artist.name}</span>
          <span id="duration">{music.duration}</span>
        </S.Infos>
        <S.ButtonsWrapper>
          <S.FavoritesWrapper onClick={() => setFavorites(music)}>
            {favorites.filter((f) => f.id === music.id).length ? (
              <HeartFilled size={30} />
            ) : (
              <HeartEmpty size={30} />
            )}
          </S.FavoritesWrapper>
          <S.PlayPauseWrapper onClick={() => handlePlayPause(String(music.id))}>
            {playingId === String(music.id) ? <Pause size={33} /> : <Play size={33} />}
          </S.PlayPauseWrapper>
        </S.ButtonsWrapper>
      </S.InfosWrapper>
      <audio
        ref={setAudioRef(String(music.id))}
        src={music.preview}
        preload="auto"
        id={String(music.id)}
      />
    </S.Card>
  );
};
