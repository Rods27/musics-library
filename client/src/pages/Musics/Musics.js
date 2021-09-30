import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from "react-js-loader";
import { fetchGenresToRedux, fetchMusicsToRedux } from '../../utils/fetchToRedux';
import {
  favoritesAction,
  genresAction,
  mainMusicsAction,
  renderAction } from '../../redux/actions';
import {
  MainMusics,
  Header,
  GenresList,
  QueryMusics,
  ArtistsByGenre,
  MusicsByGenre } from '../../components'
import {
  Container,
  MinorContainer,
  GenresTitle,
  MainMusicsTitle,
  TitleContainer,
  LoaderDiv,
  BackWardDiv
} from './styles'

function Musics(props) {
  const {
    dispatchGenres,
    dispatchMusics,
    dispatchFavorites,
    history,
    renderQuery,
    stateMusics,
    stateGenres,
    renderArtists,
    renderMusics,
    manipulateRender,
  } = props;

  useEffect(() => {
    fetchGenresToRedux(dispatchGenres);
    fetchMusicsToRedux(dispatchMusics, dispatchFavorites);
  }, [dispatchFavorites, dispatchGenres, dispatchMusics]);

  return(
    <Container>
    <Header history={ history }/>
    { (stateMusics.length > 0 && stateGenres.length > 0) ?
      <div>
        <TitleContainer>
          <BackWardDiv onClick={ () => manipulateRender(false, false) }>
            <i className="fas fa-backward"></i>
          </BackWardDiv>
          <GenresTitle>Generos</GenresTitle>
          <MainMusicsTitle>Principais Músicas</MainMusicsTitle>
        </TitleContainer>
        <MinorContainer>
          { (!renderMusics && !renderArtists) ?
            <GenresList history={ history }/>
            : ( renderArtists ?
              <ArtistsByGenre history={ history } />
              :
              <MusicsByGenre history={ history } />
            )
          }
          {  renderQuery ?
            <QueryMusics history={ history } />
            :
            <MainMusics history={ history } />
          }
        </MinorContainer>
      </div>
    : (
      <LoaderDiv>
        <Loader type="spinner-cub" bgColor={"#333"} size={120} />
      </LoaderDiv>
    )
    } 
  </Container>
  );
}

const mapStateToProps = (state) => ({
  renderQuery: state.musicsReducer.renderQuery,
  renderArtists: state.artistsReducer.renderArtists,
  renderMusics: state.artistsReducer.renderMusics,
  stateMusics: state.musicsReducer.mainMusics,
  stateGenres: state.musicsReducer.genres,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchMusics: (array) => dispatch(mainMusicsAction(array)),
  dispatchGenres: (array) => dispatch(genresAction(array)),
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
  manipulateRender: (artists, musics) => dispatch(renderAction(artists, musics)),
});

Musics.propTypes = {
  history: PropTypes.shape(),
  dispatchMusics: PropTypes.func,
  dispatchGenres: PropTypes.func,
  dispatchFavorites: PropTypes.func,
  renderQuery: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Musics);

