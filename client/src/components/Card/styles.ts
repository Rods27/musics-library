import styled from 'styled-components';

import LinkIconBase from '@src/assets/svg/link.svg?react';

import collorPallete from '../../utils/collor-pallete';

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

  img {
    width: 150px;
    height: 150px;
    background-size: 120%;
    border-radius: 4px;
  }
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
    position: relative;
    left: 8px;
    text-align: center;
    font-size: 14px;
    margin: 0;
  }

  span {
    font-size: 13px;
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

export const LinkIconWrapper = styled.a`
  position: absolute;
  right: -2px;
  top: -2px;
  padding: 2px;
  border-radius: 4px;
`;

export const LinkIcon = styled(LinkIconBase)`
  font-size: 32px;
  transition: 0.1s;
  transition: transform 0.2s ease;

  path {
    fill: ${collorPallete.darkWhite};
  }

  &:hover {
    transform: scale(1.1);
  }
`;
