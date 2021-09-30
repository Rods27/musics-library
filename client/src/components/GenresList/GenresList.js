import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Title, Container, Card, LoaderDiv } from './styles'
import getFromDeezer from "../../services/getFromDeezer";
import { artistsByGenderAction } from '../../redux/actions';
import Loader from "react-js-loader";

function GenresLists({ dispatchArtistsByGenre, stateGenres }) {
  async function getArtistsFromGenre(id) {
    const artists = await getFromDeezer(`https://api.deezer.com/genre/${id}/artists`);
    dispatchArtistsByGenre({
      renderArtists: true,
      renderMusics: false,
    }, artists.data);
  }

  return (
    <Container>
      { (stateGenres && stateGenres.length > 0)
        ? stateGenres.map( (elem, index) =>
          <button key={ index } onClick={ () => getArtistsFromGenre(elem.id) }>
            <Card style={ { backgroundImage: `url(${elem.picture_big})` } }>
              <Title>{elem.name}</Title>
            </Card>
          </button>
        )
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
  stateGenres: state.musicsReducer.genres,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchArtistsByGenre: ({renderArtists, renderMusics}, array) => 
    dispatch(artistsByGenderAction({renderArtists, renderMusics}, array)),
});

GenresLists.propTypes = {
  stateGenres: PropTypes.arrayOf(PropTypes.object),
  dispatchArtistsByGenre: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresLists);
