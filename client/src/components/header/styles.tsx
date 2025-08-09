import styled, { css } from 'styled-components';

import HeartFilledBase from '@src/assets/svg/heart-filled.svg?react';
import HomeIconBase from '@src/assets/svg/home.svg?react';
import SearchIconBase from '@src/assets/svg/search.svg?react';
import SidebarIconBase from '@src/assets/svg/sidebar.svg?react';

import collorPallete from '../../utils/collor-pallete';

export const HeaderContainer = styled.div<{ isInFavorites: boolean }>`
  z-index: 1000;
  width: 100%;
  display: grid;
  grid-template-columns: max-content minmax(350px, calc(100% - 100px));
  color: white;
  overflow-x: hidden;
  background-color: ${collorPallete.lightBlack};
  height: 50px;

  @media (max-width: 900px) {
    svg {
      font-size: 25px;
    }
    input {
      width: 70%;
      height: 25px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 650px) {
    input {
      width: 65%;
    }
    svg {
      font-size: 22px;
    }
  }

  @media (max-width: 650px) {
    grid-template-columns: max-content minmax(350px, calc(100% - 50px));
  }

  @media (max-width: 420px) {
    grid-template-columns: max-content minmax(350px, 100%);
  }

  ${({ isInFavorites }) =>
    isInFavorites &&
    css`
      display: flex;
    `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 450px) {
    justify-content: start;
    left: 10px;
  }
`;

// Base styles reused by header icon buttons
const headerButtonBase = css`
  color: inherit;
  background: none;
  padding: 4px;
  border: 0.1px solid ${collorPallete.lightBlack};
  outline: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transition: 0.1s;
    background-color: ${collorPallete.darkWhite};
    border: 0.1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const SidebarToggleBtn = styled.button`
  ${headerButtonBase}
  left: 10px;
  margin-left: 4px;

  &:hover {
    color: ${collorPallete.lightBlack};

    svg {
      transform: scale(1.1);
      path {
        fill: ${collorPallete.lightBlack};
      }
    }
  }
`;

export const FilterIcon = styled(SidebarIconBase)`
  transition: transform 0.2s ease;
  font-size: 32px;

  path {
    fill: white;
  }
`;

export const SearchIcon = styled(SearchIconBase)`
  font-size: 36px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    path {
      background-color: ${collorPallete.lightBlack};
    }
  }
`;

export const SearchInput = styled.input`
  background-color: ${collorPallete.lightestBlack};
  width: 550px;
  height: 30px;
  transition: 0.2s;
  border-radius: 5px;
  border: 0.1px solid ${collorPallete.lightBlack};
  font-size: 18px;
  color: ${collorPallete.darkWhite};
  padding-left: 12px;
  font-weight: 500;
  border: 0.1px rgba(0, 0, 0, 0.3) solid;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0px 1.5px ${collorPallete.darkWhite};
  }
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0px 2px ${collorPallete.darkWhite};
  }
`;

export const SearchWrapper = styled.button`
  ${headerButtonBase}
  margin-right: 15px;

  &:hover {
    color: ${collorPallete.lightBlack};
  }

  @media (max-width: 650px) {
    margin-right: 8px;
  }
`;

export const FavBtn = styled.button`
  ${headerButtonBase}
  position: relative;
  left: 10px;

  &:hover {
    color: crimson;
  }
`;

export const FavIcon = styled(HeartFilledBase)`
  font-size: 38px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const HomeBtn = styled.button`
  ${headerButtonBase}
  position: relative;
  left: 10px;

  &:hover {
    color: ${collorPallete.lightBlack};
  }
`;

export const HomeIcon = styled(HomeIconBase)`
  font-size: 36px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
