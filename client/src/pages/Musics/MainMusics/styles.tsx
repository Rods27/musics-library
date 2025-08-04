import styled from 'styled-components';

import collorPallete from '../../../utils/collor-pallete';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  padding-left: 10px;
  flex-wrap: wrap;
  background-color: ${collorPallete.lightestBlack};
  border-radius: 9px;
  overflow-y: auto;
  padding: 20px 0;
  max-height: 100%;
  width: 100%;
`;
