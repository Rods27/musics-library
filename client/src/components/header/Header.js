import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getFromDeezer  from '../../services/getFromDeezer'
import { queryMusicsAction } from '../../redux/actions';
import { HeaderContainer, Container, SearchBtn, HomeBtn, FavBtn } from './styles'
import cutAlbumAndTitle from '../../utils/cutAlbumAndTitle';
import secondsToMinutes from '../../utils/secondsToMinutes';

function Header({ history, dispatchQueryMusics }) {
  async function searchForQuery() {
    const query = document.getElementById('search').value;
    if (query && query.length > 0) {
      const search = await getFromDeezer(`https://api.deezer.com/search?q=${query}&limit=50`);
      secondsToMinutes(search.data);
      cutAlbumAndTitle(search.data);
      dispatchQueryMusics(search.data, true);
    }
  }

  return (
    <HeaderContainer>
      <Container>
        <SearchBtn onClick={ () => searchForQuery() }>
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

const mapDispatchToProps = (dispatch) => ({
  dispatchQueryMusics: (array, render) => dispatch(queryMusicsAction(array, render)),
});

Header.propTypes = {
  history: PropTypes.shape().isRequired,
  dispatchQueryMusics: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
