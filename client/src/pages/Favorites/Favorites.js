import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Card, Infos, Thumbs, MinorContainer } from './styles'
import { Header } from '../../components'
import { favoritesAction } from '../../redux/actions';
import addToFavorites from '../../utils/addToFavorite';
import listenAudio from '../../utils/listenAudio';

function Favorites({ history, dispatchFavorites, stateFavorites }) {
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    if(!localStorage.favorites) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    if(!localStorage.thumbs) {
      localStorage.setItem('thumbs', JSON.stringify([]));
    }
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    dispatchFavorites(favorites);
  }, [dispatchFavorites]);

  const functions = { stateFavorites, dispatchFavorites };
  const thumbs = JSON.parse(localStorage.getItem('thumbs'));
  return (
    <Container>
      <Header history={ history } />
      <MinorContainer>
        { (stateFavorites && stateFavorites.length)
          ? stateFavorites.map((elem, index) => (
            <Card key={ index } >
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
                addToFavorites(stateFavorites, elem.id, functions)
              }} 
              >
                { thumbs.includes(elem.id) ?
                  <i className="fas fa-thumbs-up on"></i>
                  :
                  <i className="far fa-thumbs-up off"></i>
                }
              </Thumbs>
              <button onClick={ () => listenAudio(elem.id, preview, setPreview) } >
                <i className={`fas fa-play play-${elem.id}`}></i>
              </button>
              <audio src={ elem.preview } preload='auto' id={ elem.id } />
            </Card>
          ))
          : 'Não há músicas favoritas.'
        }
      </MinorContainer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  stateFavorites: state.musicsReducer.favorites,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
})

Favorites.propTypes = {
  history: PropTypes.shape().isRequired,
  stateFavorites: PropTypes.arrayOf(PropTypes.object),
  dispatchFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
