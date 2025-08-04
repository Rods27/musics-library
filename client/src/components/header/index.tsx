import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMusicsStore } from '@src/store/modules';

import getFromDeezer from '../../services/getFromDeezer';
import cutAlbumAndTitle from '../../utils/cutAlbumAndTitle';
import secondsToMinutes from '../../utils/secondsToMinutes';
import * as S from './styles';

function Header() {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const setMainMusics = useMusicsStore((state) => state.setMainMusics);

  const searchForQuery = useCallback(async () => {
    if (!ref?.current) return;
    const query = ref.current.value;

    navigate(`/musics?search=${encodeURIComponent(query)}`);

    if (query && query.length > 0) {
      const { data } = await getFromDeezer(`https://api.deezer.com/search?q=${query}&limit=50`);
      secondsToMinutes(data);
      cutAlbumAndTitle(data);
      setMainMusics(data);
    }
  }, [navigate, setMainMusics]);

  return (
    <S.HeaderContainer>
      <S.Container>
        <S.SearchWrapper
          data-testid="search-btn"
          onClick={() => {
            searchForQuery();
          }}
        >
          <S.SearchIcon />
        </S.SearchWrapper>
        <S.SearchInput
          data-testid="search-input"
          id="search"
          ref={ref}
          onKeyDown={(e) => e.key === 'Enter' && searchForQuery()}
        />
        <S.FavBtn data-testid="favorite-btn" onClick={() => navigate('/musics/favorites')}>
          <S.FavIcon />
        </S.FavBtn>
        <S.HomeBtn data-testid="home-btn" onClick={() => navigate('/musics')}>
          <S.HomeIcon />
        </S.HomeBtn>
      </S.Container>
    </S.HeaderContainer>
  );
}

export default Header;
