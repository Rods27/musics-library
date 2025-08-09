import styled from 'styled-components';

import collorPallete from '@src/utils/collor-pallete';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 0px;
  max-width: 90%;
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
  height: calc(90vh - 100px);
  padding: 20px 10px;
  border-radius: 9px;
  background-color: ${collorPallete.lightestBlack};
`;

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  height: calc(100vh - 50px);
  width: 100%;
`;
