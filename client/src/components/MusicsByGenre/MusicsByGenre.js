import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favoritesAction } from '../../redux/actions';
import { Container, Card, Infos, Thumbs, LoaderDiv } from './styles'
import addToFavorites from '../../utils/addToFavorite'
import Loader from "react-js-loader";


class MusicsByGenre extends React.Component {
  constructor() {
    super();
    this.state = {
      preview: [],
    };
    this.listenAudio = this.listenAudio.bind(this);
  }

  componentWillUnmount() {
    this.setState({ preview: [] })
  }

  listenAudio(id) {
    const { preview } = this.state;
    let audioElement = document.getElementById(`${id}`);
    const play = document.querySelector(`.play-${id}`)
    if(preview.includes(id)) {
      audioElement.pause();
      const index = preview.indexOf(id)
      preview.splice(index, 1)
      this.setState({ preview })
      play.style.color = '#0fa36b'
    } else {
      audioElement.play();
      audioElement.volume = 0.3
      play.style.color = 'crimson'
      preview.push(id)
      this.setState({ preview });
      setTimeout(() => {
        const index = preview.indexOf(id)
        preview.splice(index, 1)
        this.setState({ preview });
        play.style.color = '#0fa36b'
      }, 30000);
    }
  }

  render() {
    const { musicsByGender, stateFavorites, dispatchFavorites } = this.props;
    const functions = { stateFavorites, dispatchFavorites };
    const thumbs = JSON.parse(localStorage.getItem('thumbs'));
    return (
      <Container>
        { (musicsByGender && musicsByGender.length > 0) 
          ? musicsByGender.map((elem, index) => (
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
                addToFavorites(musicsByGender, elem.id, functions);
                this.setState({ render: true });
              }} 
              >
                { thumbs.includes(elem.id) ?
                  <i className="fas fa-thumbs-up on"></i>
                  :
                  <i className="far fa-thumbs-up off"></i>
                }
              </Thumbs>
              <button onClick={ () => this.listenAudio(elem.id) } >
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
