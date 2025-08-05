import React from 'react';

import styled from 'styled-components';

import PauseBase from '@src/assets/svg/pause.svg?react';

const StyledPause = styled(PauseBase)<{ $size: number }>`
  font-size: ${({ $size }) => $size}px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  path {
    fill: #ff4757;
  }

  @media (max-width: 800px) {
    font-size: 25px;
    padding: 0px 2px 0 0;
  }
`;

interface PauseProps {
  size?: number;
}

const Pause: React.FC<PauseProps> = ({ size = 20, ...props }) => {
  return <StyledPause $size={size} {...props} />;
};

export default Pause;
