import styled from 'styled-components';

import BackIcon from '@src/assets/svg/back.svg?react';
import { collorPallete } from '@src/utils';

export const SidebarContainer = styled.aside<{ open: boolean }>`
  display: ${({ open }) => (open ? 'initial' : 'none')};
  position: absolute;
  z-index: 1000;
  top: 50px;
  left: 0;
  bottom: 0;
  background-color: ${collorPallete.lightestBlack};
  border-right: 0.5px solid rgba(255, 255, 255, 0.2);
  overflow-y: auto;
  transition: width 0.25s ease;
  width: ${({ open }) => (open ? '50vw' : '0')};
  min-width: ${({ open }) => (open ? '250px' : '0')};
  max-width: 600px;
  overflow-y: hidden;
  height: calc(100vh - 50px);
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  padding: 12px;
  overflow-x: hidden;
  height: calc(100% - 150px);
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
  border-bottom: 1px solid hsla(0, 0%, 90%, 0.4);
  background-color: ${collorPallete.lightestBlack};
  color: white;
  font-weight: 700;
`;

export const Back = styled(BackIcon)`
  cursor: pointer;
  font-size: 1.5rem;
`;
