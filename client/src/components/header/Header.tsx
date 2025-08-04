import React from 'react';

import getFromDeezer from '../../services/getFromDeezer';
import { useMusicStoreTemp } from '../../store';
import cutAlbumAndTitle from '../../utils/cutAlbumAndTitle';
import secondsToMinutes from '../../utils/secondsToMinutes';
import { HeaderContainer, Container, SearchBtn, HomeBtn, FavBtn } from './styles';

function Header({ history }: { history: any }) {
  const { setQueryMusics } = useMusicStoreTemp();

  async function searchForQuery() {
    const searchInput = document.getElementById('search') as HTMLInputElement;
    const query = searchInput?.value;
    if (query && query.length > 0) {
      const search = await getFromDeezer(`https://api.deezer.com/search?q=${query}&limit=50`);
      secondsToMinutes(search.data);
      cutAlbumAndTitle(search.data);
      setQueryMusics(search.data, true);
    }
  }

  return (
    <HeaderContainer>
      <Container>
        <SearchBtn
          data-testid="search-btn"
          onClick={() => {
            searchForQuery();
          }}
        >
          <i className="fas fa-search"></i>
        </SearchBtn>
        <input data-testid="search-input" id="search" />
        <FavBtn data-testid="favorite-btn" onClick={() => history.push('/musics/favorites')}>
          <i className="fas fa-heart"></i>
        </FavBtn>
        <HomeBtn data-testid="home-btn" onClick={() => history.push('/musics')}>
          <i className="fas fa-home"></i>
        </HomeBtn>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
