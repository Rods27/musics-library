import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favoritesAction, queryMusicsAction } from '../../redux/actions';
import { Container, Card, Infos, Thumbs, LoaderDiv } from './styles'
import addToFavorites from '../../utils/addToFavorite'
import Loader from "react-js-loader";
import useListenAudio from '../../utils/useListenAudio';

function QueryMusics(props) {
  const {
    dispatchQueryMusics,
    stateQueryMusics,
    stateFavorites,
    dispatchFavorites 
  } = props;

  const [, listenAudio] = useListenAudio();
  const [, updateFavorites] = useState([]);

  useEffect(() => {
    dispatchQueryMusics(stateQueryMusics, true);
  }, [dispatchQueryMusics, stateQueryMusics]);

  const functions = { stateFavorites, dispatchFavorites };
  const thumbs = JSON.parse(localStorage.getItem('thumbs'));
  return (
    <Container>
      { (stateQueryMusics && stateQueryMusics.length > 0) 
        ? stateQueryMusics.map(elem => (
          <Card key={elem.name} >
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
              addToFavorites(stateQueryMusics, elem.id, functions);
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
  stateQueryMusics: state.musicsReducer.stateQueryMusics,
  stateFavorites: state.musicsReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchQueryMusics: (array, render) => dispatch(queryMusicsAction(array, render)),
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
});

QueryMusics.propTypes = {
  stateQueryMusics: PropTypes.arrayOf(PropTypes.object),
  stateFavorites: PropTypes.arrayOf(PropTypes.object),
  dispatchQueryMusics: PropTypes.func.isRequired,
  dispatchFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryMusics);
