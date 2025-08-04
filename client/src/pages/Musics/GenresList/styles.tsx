import styled from 'styled-components';

import collorPallete from '../../../utils/collor-pallete';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  overflow-y: auto;
  width: 100%;
  background-color: ${collorPallete.lightestBlack};
  padding: 20px 0;
  border-radius: 9px;
  height: 100%;
  max-width: 100%;
  justify-content: center;

  button {
    background: none;
    border: none;
    padding: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 220px;
  height: 180px;
  background-position: 100% 100%;
  background-size: 100%;
  margin: 7px 10px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 7px;
  text-shadow: 0 0 3px #000;
  -moz-text-shadow: 0 0 3px #000;
  -webkit-text-shadow: 0 0 3px #000;

  @media (max-width: 900px) {
    width: 125px;
    height: 100px;
    h1 {
      font-size: 16px;
    }
  }
`;

export const Title = styled.h1`
  margin: 15px 0 0 15px;
  color: white;
`;
