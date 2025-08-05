import React from 'react';

import styled from 'styled-components';

import HeartFilledBase from '@src/assets/svg/heart-filled.svg?react';

const StyledHeartFilled = styled(HeartFilledBase)<{ $size: number }>`
  font-size: ${({ $size }) => $size}px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  path {
    fill: #ff4757;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

interface HeartFilledProps {
  size?: number;
}

const HeartFilled: React.FC<HeartFilledProps> = ({ size = 20, ...props }) => {
  return <StyledHeartFilled $size={size} {...props} />;
};

export default HeartFilled;
