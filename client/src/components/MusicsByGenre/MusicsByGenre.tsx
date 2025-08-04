import React, { useState } from 'react';
import Loader from 'react-js-loader';

import { useMusicStoreTemp } from '../../store';
import addToFavorites from '../../utils/addToFavorite';
import useListenAudio from '../../utils/useListenAudio';
import { Container, Card, Infos, Thumbs, LoaderDiv, PlayIcon } from './styles';

function MusicsByGenre({ history }: { history: any }) {
  const { musicsByGender, favorites: stateFavorites } = useMusicStoreTemp();
  const [, updateFavorites] = useState([]);
  const thumbs = JSON.parse(localStorage.getItem('thumbs') || '[]');
  const [, listenAudio] = useListenAudio();

  return (
    <Container>
      {musicsByGender && musicsByGender.length > 0 ? (
        musicsByGender.map((elem) => (
          <Card key={elem.name}>
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
                addToFavorites(musicsByGender, elem.id);
                updateFavorites([]);
              }}
            >
              {thumbs.includes(elem.id) ? (
                <i className="fas fa-thumbs-up on"></i>
              ) : (
                <i className="far fa-thumbs-up off"></i>
              )}
            </Thumbs>
            <button onClick={() => listenAudio(elem.id)}>
              <PlayIcon />
            </button>
            <audio src={elem.preview} preload="auto" id={elem.id} />
          </Card>
        ))
      ) : (
        <LoaderDiv>
          <Loader type="spinner-cub" bgColor={'#FFFF'} size={100} />
        </LoaderDiv>
      )}
    </Container>
  );
}

export default MusicsByGenre;
