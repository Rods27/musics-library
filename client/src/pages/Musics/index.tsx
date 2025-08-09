import Loader from 'react-js-loader';

import { useMusicsStore } from '@src/store/modules';
import { useGenresStore } from '@src/store/modules/genres';
import { useUiStore } from '@src/store/modules/ui';

import Header from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { useInitialFetch } from '../hooks/useInitialFetch';
import { MusicsContainer } from './MainMusics';
import * as S from './styles';

function Musics() {
  const mainMusics = useMusicsStore((state) => state.mainMusics);
  const genres = useGenresStore((state) => state.genres);
  const isSidebarOpen = useUiStore((state) => state.isGenresSidebarOpen);

  useInitialFetch();

  return (
    <S.Container>
      <Header />
      <SideBar />
      {!!mainMusics.length && !!genres.length ? (
        <S.BodyContainer $withSidebar={isSidebarOpen}>
          <S.MainColumn>
            {/* {!isSidebarOpen && (
              <S.TopWrapper>
                <GenresList />
              </S.TopWrapper>
            )} */}
            <S.BottomWrapper>{<MusicsContainer state={mainMusics} />}</S.BottomWrapper>
          </S.MainColumn>
        </S.BodyContainer>
      ) : (
        <S.LoaderDiv>
          <Loader type="spinner-cub" bgColor={'#333'} size={String(100)} />
        </S.LoaderDiv>
      )}
    </S.Container>
  );
}

export default Musics;
