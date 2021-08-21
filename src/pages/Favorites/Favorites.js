import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Card, Infos, Thumbs, MinorContainer } from './styles'
import { Header } from '../../components'
import { favoritesAction } from '../../redux/actions';
import addToFavorites from '../../utils/addToFavorite'

class Favorites extends React.Component {
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

  componentDidMount() {
    const { dispatchFavorites } = this.props
    if(!localStorage.favorites) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    if(!localStorage.thumbs) {
      localStorage.setItem('thumbs', JSON.stringify([]));
    }
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    dispatchFavorites(favorites);
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
    const { history, stateFavorites, dispatchFavorites } = this.props;
    const functions = { stateFavorites, dispatchFavorites };
    const thumbs = JSON.parse(localStorage.getItem('thumbs'));
    return (
      <Container>
        <Header history={ history } />
        <MinorContainer>
          { (stateFavorites && stateFavorites.length)
            ? stateFavorites.map((elem, index) => (
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
                  addToFavorites(stateFavorites, elem.id, functions)
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
            : 'Não há músicas favoritas.'
          }
        </MinorContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  stateFavorites: state.musicsReducer.favorites,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchFavorites: (array) => dispatch(favoritesAction(array)),
})

Favorites.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
