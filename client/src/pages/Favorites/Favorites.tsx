import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useListenAudio } from '@src/hooks/useListenAudio';

import { Header } from '../../components';
import { useMusicStoreTemp } from '../../store';
import addToFavorites from '../../utils/addToFavorite';
import { Container, Card, Infos, Thumbs, MinorContainer } from './styles';

function Favorites() {
  const navigate = useNavigate();
  const { favorites: stateFavorites, setFavorites } = useMusicStoreTemp();
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const { handlePlayPause, setAudioRef, playingId } = useListenAudio(audioRefs);

  useEffect(() => {
    if (!localStorage.favorites) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    if (!localStorage.thumbs) {
      localStorage.setItem('thumbs', JSON.stringify([]));
    }
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favorites);
  }, [setFavorites]);

  const thumbs = JSON.parse(localStorage.getItem('thumbs') || '[]');

  return (
    <Container>
      <Header history={{ push: navigate }} />
      <MinorContainer>
        {stateFavorites && stateFavorites.length
          ? stateFavorites.map((elem) => (
              <Card key={elem.artist}>
                <a href={elem.link} target="blank">
                  <i className="fab fa-deezer deezer"></i>
                </a>
                <img src={elem.album.cover_medium} alt={`${elem.name}`} />
                <Infos>
                  <h4>{elem.title}</h4>
                  <span>{elem.album.title}</span>
                  <span>{elem.artist.name}</span>
                  <span id="duration">{elem.duration}</span>
                </Infos>
                <Thumbs
                  onClick={() => {
                    addToFavorites(stateFavorites, elem.id);
                  }}
                >
                  {thumbs.includes(elem.id) ? (
                    <i className="fas fa-thumbs-up on"></i>
                  ) : (
                    <i className="far fa-thumbs-up off"></i>
                  )}
                </Thumbs>
                <button onClick={() => handlePlayPause(String(elem.id))}>
                  <PlayIcon $play={playingId === String(elem.id)} />
                </button>
                <audio
                  ref={setAudioRef(String(elem.id))}
                  src={elem.preview}
                  preload="auto"
                  id={String(elem.id)}
                />
              </Card>
            ))
          : 'Não há músicas favoritas.'}
      </MinorContainer>
    </Container>
  );
}

export default Favorites;
