import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getFromDeezer  from '../../services/getFromDeezer'
import { queryMusicsAction } from '../../redux/actions';
import { HeaderContainer, Container, SearchBtn, HomeBtn, FavBtn } from './styles'


class Header extends React.Component {
  secondsToMinutes(queryMusics) {
    queryMusics.forEach((elem) => {
      let seconds = Number(elem.duration);
      let min = Math.floor(seconds % 3600 / 60);
      let sec = Math.floor(seconds % 3600 % 60);
      let newSec = "";
      newSec = sec < 10 ? "0" : "";
      elem.duration = `${min}:${newSec}${sec}`;
    })
  }

  cutAlbumAndTitle(queryMusics) {
    queryMusics.forEach((elem) => {
      const music = elem.title;
      const album = elem.album.title;
      if(music.length > 30) {
        const newStr = elem.title.substr(0, 30).concat('...')
        elem.title = newStr;
      }
      if(album.length > 30) {
        const newStr = elem.album.title.substr(0, 30).concat('...')
        elem.album.title = newStr;
      }
    })
  }

  async searchForQuery() {
    const { dispatchQueryMusics } = this.props;
    const query = document.getElementById('search').value;
    if (query && query.length > 0) {
      const search = await getFromDeezer(`https://api.deezer.com/search?q=${query}&limit=50`);
      this.secondsToMinutes(search.data);
      this.cutAlbumAndTitle(search.data);
      dispatchQueryMusics(search.data, true);
    }
  }

  render() {
    const { history } = this.props;
    return (
      <HeaderContainer>
        <Container>
          <SearchBtn onClick={ () => this.searchForQuery() }>
            <i className="fas fa-search"></i>
          </SearchBtn>
          <input  id="search"/>
          <FavBtn onClick={ () => history.push('/musics/favorites') } >
            <i className="fas fa-heart"></i>
          </FavBtn>
          <HomeBtn onClick={ () => history.push('/musics')}>
            <i className="fas fa-home"></i>
          </HomeBtn>
        </Container>
      </HeaderContainer>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  dispatchQueryMusics: (array, render) => dispatch(queryMusicsAction(array, render)),
});

Header.propTypes = {
  dispatchQueryMusics: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
