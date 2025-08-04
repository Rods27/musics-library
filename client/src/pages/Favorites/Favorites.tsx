import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components';
import { useMusicStoreTemp } from '../../store';
import addToFavorites from '../../utils/addToFavorite';
import useListenAudio from '../../utils/useListenAudio';
import { Container, Card, Infos, Thumbs, MinorContainer } from './styles';

function Favorites() {
  const navigate = useNavigate();
  const { favorites: stateFavorites, setFavorites } = useMusicStoreTemp();
  const [, listenAudio] = useListenAudio();

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
                <button onClick={() => listenAudio(elem.id)}>
                  <i className={`fas fa-play play-${elem.id}`}></i>
                </button>
                <audio src={elem.preview} preload="auto" id={elem.id} />
              </Card>
            ))
          : 'Não há músicas favoritas.'}
      </MinorContainer>
    </Container>
  );
}

export default Favorites;
