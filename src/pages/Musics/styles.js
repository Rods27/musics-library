import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const MinorContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-y: hidden;
  max-height: 100vh;
  min-width: 1000px;
`;

export const TitleContainer = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  width: 85%;
  min-width: 800px;
  max-width: 1630px;
`

export const GenresTitle = styled.h1`
  color: #333;
`
export const MainMusicsTitle = styled.h1`
  position: absolute;
  right: 20%;
  color: #333;
`

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  height: 100vh;
  width: 100vh;
`
