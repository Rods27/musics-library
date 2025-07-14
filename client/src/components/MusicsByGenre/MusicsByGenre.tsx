import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favoritesAction } from '../../redux/actions';
import { Container, Card, Infos, Thumbs, LoaderDiv } from './styles'
import addToFavorites from '../../utils/addToFavorite'
import Loader from "react-js-loader";
import useListenAudio from '../../utils/useListenAudio';

function MusicsByGenre({ musicsByGender, stateFavorites, dispatchFavorites }) {
  const [, updateFavorites] = useState([]);
  const functions = { stateFavorites, dispatchFavorites };
  const thumbs = JSON.parse(localStorage.getItem('thumbs'));
  const [, listenAudio] = useListenAudio();

  return (
    <Container>
      { (musicsByGender && musicsByGender.length > 0) 
        ? musicsByGender.map(elem => (
          <Card key={ elem.name } >
            <a href={ elem.link } target="blank">
              <i className="fab fa-deezer deezer"></i>
            </a>
            <img src={ elem.album.cover_medium } alt={`${elem.name}`}/>
            <Infos>
              <h4>{elem.title}</h4>
              <span>{elem.album.title}</span>
              <span>{elem.artist.name}</span>
              <span id="duration">{elem.duration}</span>
            </Infos>
            <Thumbs onClick={ () => {
              addToFavorites(musicsByGender, elem.id, functions);
              updateFavorites([]);
            }} 
            >
              { thumbs.includes(elem.id) ?
                <i className="fas fa-thumbs-up on"></i>
                :
                <i className="far fa-thumbs-up off"></i>
              }
            </Thumbs>
            <button onClick={ () => listenAudio(elem.id) } >
              <i className={`fas fa-play play-${elem.id}`}></i>
            </button>
            <audio src={ elem.preview } preload='auto' id={ elem.id } />
          </Card>
        ))
        : (
          <LoaderDiv>
            <Loader type="spinner-cub" bgColor={"#FFFF"} size={100} />
          </LoaderDiv>
        )
      }
    </Container>
  );
}

const mapStateToProps = (state) => ({
  musicsByGender: state.artistsReducer.musicsByGender,
  stateFavorites: state.musicsReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
});

MusicsByGenre.propTypes = {
  musicsByGender: PropTypes.arrayOf(PropTypes.object),
  stateFavorites: PropTypes.arrayOf(PropTypes.object),
  dispatchFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicsByGenre);
