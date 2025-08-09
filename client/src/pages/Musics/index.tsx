import Loader from 'react-js-loader';

import { useMusicsStore } from '@src/store/modules';
import { useUiStore } from '@src/store/modules/ui';

import Header from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { useInitialFetch } from '../hooks/useInitialFetch';
import { MusicsContainer } from './MainMusics';
import * as S from './styles';

function Musics() {
  const mainMusics = useMusicsStore((state) => state.mainMusics);
  const isOpen = useUiStore((state) => state.isGenresSidebarOpen);
  const search = useUiStore((state) => state.search);

  useInitialFetch(search);

  return (
    <S.Container>
      <Header />
      {isOpen && <SideBar />}
      {mainMusics.length ? (
        <S.BodyContainer>
          <S.MainColumn>
            <MusicsContainer state={mainMusics} />
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
