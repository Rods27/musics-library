import styled, { css, keyframes } from 'styled-components';

import BackIcon from '@src/assets/svg/back.svg?react';
import CloseIcon from '@src/assets/svg/close.svg?react';
import { collorPallete } from '@src/utils';

const moveInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const moveOutRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Overlay = styled.div<{ closeOverlay: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 1;
  transition: all 0.2s ease-in-out;

  ${({ closeOverlay }) =>
    !closeOverlay &&
    css`
      opacity: 0;
    `}
`;

export const SidebarContainer = styled.aside`
  position: absolute;
  z-index: 1000;
  top: 0px;
  left: 0;
  bottom: 0;
  background-color: ${collorPallete.lightestBlack};
  border-right: 0.5px solid rgba(255, 255, 255, 0.2);
  overflow-y: auto;
  transition: width 0.25s ease;
  width: 50vw;
  min-width: 250px;
  max-width: 600px;
  overflow-y: hidden;
  height: 100vh;
  animation: ${moveInLeft} 0.3s forwards;

  &.closing {
    position: fixed;
    right: 0;
    bottom: 0;
    animation: ${moveOutRight} 0.3s forwards;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  padding: 12px;
  overflow-x: hidden;
  height: calc(100% - 100px);
  margin: 10px 10px 0;
  padding-right: 10px;
  max-height: 1300px;
  padding-right: 20px;

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    grid-template-columns: 50% 50%;
    gap: 10px;
  }
`;

export const GenreCard = styled.div<{ image?: string }>`
  height: 110px;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 8px;
  text-shadow: 0 0 3px #000;
  color: white;
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  cursor: pointer;

  @media (max-width: 650px) {
    height: 80px;
  }
`;

export const Title = styled.span`
  font-weight: 700;

  @media (max-width: 650px) {
    font-size: 0.9rem;
  }
`;

export const FilterHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 2px solid hsla(0, 0%, 90%, 0.4);
  background-color: ${collorPallete.lightestBlack};
  color: white;
  font-weight: 700;

  @media (max-width: 650px) {
    padding: 10px;

    span {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 650px) {
    gap: 10px;

    svg {
      font-size: 1.2rem;
    }
  }
`;

export const Back = styled(BackIcon)`
  cursor: pointer;
  font-size: 1.5rem;
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
  font-size: 1.5rem;
  color: white;

  path {
    fill: white;
  }
`;
