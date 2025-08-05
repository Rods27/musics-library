import React from 'react';

import styled from 'styled-components';

import HeartEmptyBase from '@src/assets/svg/heart-empty.svg?react';

const StyledHeartEmpty = styled(HeartEmptyBase)<{ $size: number }>`
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

interface HeartEmptyProps {
  size?: number;
}

const HeartEmpty: React.FC<HeartEmptyProps> = ({ size = 20, ...props }) => {
  return <StyledHeartEmpty $size={size} {...props} />;
};

export default HeartEmpty;
