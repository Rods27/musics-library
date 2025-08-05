import Loader from 'react-js-loader';

import { useMusicsStore } from '@src/store/modules';
import { useGenresStore } from '@src/store/modules/genres';

import Header from '../../components/Header';
import { useInitialFetch } from '../hooks/useInitialFetch';
import GenresList from './GenresList';
import { MusicsContainer } from './MainMusics';
import * as S from './styles';

function Musics() {
  const mainMusics = useMusicsStore((state) => state.mainMusics);
  const genres = useGenresStore((state) => state.genres);

  useInitialFetch();

  return (
    <S.Container>
      <Header />
      {!!mainMusics.length && !!genres.length ? (
        <S.BodyContainer>
          <S.TopWrapper>
            <GenresList />
          </S.TopWrapper>

          <S.BottomWrapper>{<MusicsContainer state={mainMusics} />}</S.BottomWrapper>
        </S.BodyContainer>
      ) : (
        <S.LoaderDiv>
          <Loader type="spinner-cub" bgColor={'#333'} size={String(120)} />
        </S.LoaderDiv>
      )}
    </S.Container>
  );
}

export default Musics;
