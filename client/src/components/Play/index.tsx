import React from 'react';

import styled from 'styled-components';

import PlayBase from '@src/assets/svg/play.svg?react';

const StyledPlay = styled(PlayBase)<{ $size: number }>`
  font-size: ${({ $size }) => $size}px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  path {
    fill: #0fa36b;
  }
  padding-left: 5px;
`;

interface PlayProps {
  size?: number;
}

const Play: React.FC<PlayProps> = ({ size = 20, ...props }) => {
  return <StyledPlay $size={size} {...props} />;
};

export default Play;
