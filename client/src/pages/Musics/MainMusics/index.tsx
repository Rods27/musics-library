import { Card } from '@src/components/Card';
import type { IMusics } from '@src/interfaces/musics';

import * as S from './styles';

export const MusicsContainer = ({ state }: { state: IMusics[] }) => {
  return (
    <S.Container>
      {state.length && state.map((elem) => <Card key={elem.id} music={elem} />)}
    </S.Container>
  );
};
