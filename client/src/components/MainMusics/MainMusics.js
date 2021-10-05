import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favoritesAction, mainMusicsAction } from '../../redux/actions';
import { Container, Card, Infos, Thumbs, LoaderDiv } from './styles'
import addToFavorites from '../../utils/addToFavorite'
import Loader from "react-js-loader";
import useListenAudio from '../../utils/useListenAudio';

function MainMusics(props) {
  const {
    stateMainMusics,
    stateFavorites,
    dispatchFavorites
  } = props;

  const [, updateFavorites] = useState([]);
  const functions = { stateFavorites, dispatchFavorites };
  const thumbs = JSON.parse(localStorage.getItem('thumbs'));
  const [preview, listenAudio] = useListenAudio();

  useEffect(() => {
    console.log('useEffect');
  }, [preview])

  return (
    <Container>
      { (stateMainMusics && stateMainMusics.length > 0) 
        ? stateMainMusics.map((elem, index) => (
          <Card key={ index } >
            <a href={ elem.artist.link } target="blank">
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
              addToFavorites(stateMainMusics, elem.id, functions);
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
  )
}

const mapStateToProps = (state) => ({
  stateMainMusics: state.musicsReducer.mainMusics,
  stateFavorites: state.musicsReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchMusics: (array) => dispatch(mainMusicsAction(array)),
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
});

MainMusics.propTypes = {
  history: PropTypes.shape().isRequired,
  dispatchMusics: PropTypes.func.isRequired,
  dispatchFavorites: PropTypes.func.isRequired,
  stateMainMusics: PropTypes.arrayOf(PropTypes.object),
  stateFavorites: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMusics);
