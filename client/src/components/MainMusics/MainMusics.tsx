import React, { useState } from 'react';
import Loader from 'react-js-loader';

import { useMusicsStore } from '@src/store/modules';

import addToFavorites from '../../utils/addToFavorite';
import useListenAudio from '../../utils/useListenAudio';
import { Container, Card, Infos, Thumbs, LoaderDiv, PlayIcon } from './styles';

function MainMusics() {
  const mainMusics = useMusicsStore((state) => state.mainMusics);

  const [, updateFavorites] = useState([]);
  const thumbs = JSON.parse(localStorage.getItem('thumbs') || '[]');
  const [, listenAudio] = useListenAudio();

  return (
    <Container>
      {mainMusics.length ? (
        mainMusics.map((elem) => (
          <Card key={elem.id}>
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
                addToFavorites(mainMusics, elem.id);
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
              <i className={`fas fa-play play-${elem.id}`}></i>
              <PlayIcon />
            </button>
            <audio src={elem.preview} preload="auto" id={String(elem.id)} />
          </Card>
        ))
      ) : (
        <LoaderDiv>
          <Loader type="spinner-cub" bgColor={'#FFFF'} size={String(100)} />
        </LoaderDiv>
      )}
    </Container>
  );
}

export default MainMusics;
