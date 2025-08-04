import styled from 'styled-components';

import collorPallete from '../../../utils/collor-pallete';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  flex-wrap: wrap;
  background-color: ${collorPallete.lightestBlack};
  border-radius: 9px;
  margin: calc(2vh + 95px) 0 30px 17px;
  overflow-y: auto;
  padding: 20px 0;
  width: 800px;
  max-height: 1320px;
  @media (min-width: 1300px) {
    width: 45%;
  }
  h1 {
    position: absolute;
  }
  img {
    width: 150px;
    height: 150px;
    background-size: 120%;
    border-radius: 4px;
  }
  h4 {
    font-size: 14px;
    margin: 0;
  }
  span {
    font-size: 13px;
  }
  a {
    color: inherit;
  }
  .deezer {
    position: absolute;
    font-size: 32px;
    right: 7px;
    top: 5px;
    width: 38px;
    padding: 2px;
    border-radius: 4px;
    &:hover {
      transition: 0.1s;
      color: ${collorPallete.lightBlack};
      background-color: ${collorPallete.darkWhite};
      border: 0.1px solid rgba(0, 0, 0, 0.5);
      opacity: 0.8;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${collorPallete.lightBlack};
  width: 200px;
  height: 250px;
  background-position: 100% 100%;
  background-size: 100%;
  margin: 7px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 7px;
`;

export const InfosWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(auto, calc(100% - 40px)) minmax(40px, 40px);
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  gap: 2px;
  padding-left: 10px;

  h4 {
    text-align: center;
  }

  span,
  h4 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FavoritesWrapper = styled.div`
  position: absolute;
  top: 0px;
`;

export const PlayPauseWrapper = styled.div`
  position: absolute;
  top: 45px;
`;

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100%;
`;
