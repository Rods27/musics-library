import React from 'react';
import { connect } from 'react-redux';
import { Title, Container, Card, LoaderDiv } from './styles'
import PropTypes from 'prop-types';
import getFromDeezer from '../../services/getFromDeezer';
import { musicsByArtistAction } from '../../redux/actions';
import { secondsToMinutes, separateAlbunAndTitle } from '../../utils/fetchToRedux';
import Loader from "react-js-loader";


class ArtistsByGenre extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async getMusicsByArtist(id) {
    const { dispatchMusicsByGenre } = this.props;
    const album = await getFromDeezer(`https://api.deezer.com/artist/${id}/top?limit=50`);
    separateAlbunAndTitle(album.data);
    secondsToMinutes(album.data);
    dispatchMusicsByGenre({
      renderArtists: false,
      renderMusics: true,
    }, album.data);
  }

  render() {
    const { stateAristsByGender } = this.props;
    return (
      <Container>
        { (stateAristsByGender && stateAristsByGender.length > 0)
          ? stateAristsByGender.map( (elem, index) =>
            <button key={ index } onClick={ () => this.getMusicsByArtist(elem.id) }>
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
}

const mapStateToProps = (state) => ({
  stateAristsByGender: state.artistsReducer.artistsByGender,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchMusicsByGenre: ({renderArtists, renderMusics}, array) => 
    dispatch(musicsByArtistAction({renderArtists, renderMusics}, array)),
});

ArtistsByGenre.propTypes = {
  stateAristsByGender: PropTypes.arrayOf(PropTypes.object),
  dispatchMusicsByGenre: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsByGenre);
