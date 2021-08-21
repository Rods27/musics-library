import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MainMusics, Header, GenresList, QueryMusics } from '../../components'
import { Container, MinorContainer, GenresTitle, MainMusicsTitle, TitleContainer, LoaderDiv } from './styles'
import { fetchGenresToRedux, fetchMusicsToRedux } from '../../utils/fetchToRedux';
import { favoritesAction, genresAction, mainMusicsAction } from '../../redux/actions';
import Loader from "react-js-loader";

class Musics extends React.Component {
  componentDidMount() {
    const { dispatchGenres, dispatchMusics, dispatchFavorites } = this.props;
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    fetchGenresToRedux(dispatchGenres);
    fetchMusicsToRedux(dispatchMusics);
    dispatchFavorites(favorites);
  }
  render() {
    const { history, renderQuery, stateMusics, stateGenres} = this.props;
    return (
      <Container>
        <Header history={ history }/>
        { (stateMusics.length > 0 && stateGenres.length > 0) ?
          <div>
            <TitleContainer>
              <GenresTitle>Generos</GenresTitle>
              <MainMusicsTitle>Principais Músicas</MainMusicsTitle>
            </TitleContainer>
            <MinorContainer>
              <GenresList history={ history }/>
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
}

const mapStateToProps = (state) => ({
  renderQuery: state.musicsReducer.renderQuery,
  stateMusics: state.musicsReducer.mainMusics,
  stateGenres: state.musicsReducer.genres,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchMusics: (array) => dispatch(mainMusicsAction(array)),
  dispatchGenres: (array) => dispatch(genresAction(array)),
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
});

Musics.propTypes = {
  history: PropTypes.shape(),
  dispatchMusics: PropTypes.func,
  dispatchGenres: PropTypes.func,
  dispatchFavorites: PropTypes.func,
  renderQuery: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Musics);

