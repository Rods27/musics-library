import styled from 'styled-components';

import collorPallete from '../../utils/collor-pallete';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MinorContainer = styled.div`
  margin: 40px;
  display: flex;
  justify-content: center;
  color: white;
  flex-wrap: wrap;
  background-color: ${collorPallete.lightestBlack};
  border-radius: 9px;
  overflow-y: auto;
  padding: 20px 0;
  max-width: 90%;
`;

export const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
`;
