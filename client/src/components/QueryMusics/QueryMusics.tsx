import React, { useState, useEffect, useRef } from 'react';
import Loader from 'react-js-loader';

import { useListenAudio } from '@src/hooks/useListenAudio';

import { useMusicStoreTemp } from '../../store';
import addToFavorites from '../../utils/addToFavorite';
import Play from '../Play';
import { Container, Card, Infos, Thumbs, LoaderDiv } from './styles';

function QueryMusics({ history }: { history: any }) {
  const { stateQueryMusics, favorites: stateFavorites, setQueryMusics } = useMusicStoreTemp();

  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const { handlePlayPause, setAudioRef, playingId } = useListenAudio(audioRefs);
  const [, updateFavorites] = useState([]);

  useEffect(() => {
    if (stateQueryMusics.length > 0) {
      setQueryMusics(stateQueryMusics, true);
    }
  }, [stateQueryMusics, setQueryMusics]);

  const thumbs = JSON.parse(localStorage.getItem('thumbs') || '[]');

  return (
    <Container>
      {stateQueryMusics && stateQueryMusics.length > 0 ? (
        stateQueryMusics.map((elem) => (
          <Card key={elem.name}>
            <a href={elem.artist.link} target="blank">
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
                addToFavorites(stateQueryMusics, elem.id);
                updateFavorites([]);
              }}
            >
              {thumbs.includes(elem.id) ? (
                <i className="fas fa-thumbs-up on"></i>
              ) : (
                <i className="far fa-thumbs-up off"></i>
              )}
            </Thumbs>
            <button onClick={() => handlePlayPause(String(elem.id))}>
              <Play />
            </button>
            <audio
              ref={setAudioRef(String(elem.id))}
              src={elem.preview}
              preload="auto"
              id={String(elem.id)}
            />
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

export default QueryMusics;
