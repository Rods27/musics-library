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
  max-width: 90%;
`;

export const Wrapper = styled.div`
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

export const NoFavorites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  width: 100%;
  padding: 40px;
  font-size: 1.4rem;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media (max-width: 650px) {
    font-size: 0.8rem;
  }
`;
