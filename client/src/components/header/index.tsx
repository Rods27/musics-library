import { useCallback, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useMusicsStore } from '@src/store/modules';
import { useUiStore } from '@src/store/modules/ui';

import getFromDeezer from '../../services/getFromDeezer';
import cutAlbumAndTitle from '../../utils/cutAlbumAndTitle';
import secondsToMinutes from '../../utils/secondsToMinutes';
import * as S from './styles';

function Header() {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isInFavorites = useMemo(() => pathname.includes('favorites'), [pathname]);

  const setMainMusics = useMusicsStore((state) => state.setMainMusics);
  const toggleGenresSidebar = useUiStore((state) => state.toggleGenresSidebar);
  const setSearch = useUiStore((state) => state.setSearch);

  const searchForQuery = useCallback(async () => {
    if (!ref?.current) return;
    const query = ref.current.value;

    if (query && query.length > 0) {
      const { data } = await getFromDeezer(`https://api.deezer.com/search?q=${query}&limit=50`);
      secondsToMinutes(data);
      cutAlbumAndTitle(data);
      setMainMusics(data);
    }
    setSearch(query);
    navigate('/musics');
  }, [navigate, setMainMusics, setSearch]);

  return (
    <S.HeaderContainer>
      {!isInFavorites && (
        <S.SidebarToggleBtn onClick={toggleGenresSidebar} aria-label="Abrir filtros de gêneros">
          <S.FilterIcon />
        </S.SidebarToggleBtn>
      )}
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

        {isInFavorites ? (
          <S.HomeBtn data-testid="home-btn" onClick={() => navigate('/musics')}>
            <S.HomeIcon />
          </S.HomeBtn>
        ) : (
          <S.FavBtn data-testid="favorite-btn" onClick={() => navigate('/musics/favorites')}>
            <S.FavIcon />
          </S.FavBtn>
        )}
      </S.Container>
    </S.HeaderContainer>
  );
}

export default Header;
