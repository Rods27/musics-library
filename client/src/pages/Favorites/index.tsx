import { useFavoritesStore } from '@src/store/modules';

import Header from '../../components/Header';
import { MusicsContainer } from '../Musics/MainMusics';
import * as S from './styles';

function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <S.Container>
      <Header />
      <S.MinorContainer>
        {favorites.length ? (
          <S.Wrapper>
            <MusicsContainer state={favorites} />
          </S.Wrapper>
        ) : (
          <S.NoFavorites>Não há músicas favoritas.</S.NoFavorites>
        )}
      </S.MinorContainer>
    </S.Container>
  );
}

export default Favorites;
