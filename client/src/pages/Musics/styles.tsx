import styled from 'styled-components';
import collorPallete from '../../utils/collor-pallete'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const MinorContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  max-height: 100vh;
  min-width: 1000px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  position: absolute;
  top: 40px;
  right: 0;
  min-width: 100%;
  height: 50vh;
`

export const GenresTitle = styled.h1`
  color: #333;
  min-width: 35%;
`
export const MainMusicsTitle = styled.h1`
  min-width: 40%;
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

export const BackWardDiv = styled.button`
  position: absolute;
  bottom: 0;
  opacity: 0.7;
  padding: 5px;
  border-radius: 5px;
  z-index: 10;
  left: 25px;
  background: none;
  border: none;
  text-shadow: 0 0 2px #fff;
  -moz-text-shadow: 0 0 2px #fff;
  -webkit-text-shadow: 0 0 2px #fff;
  color: ${collorPallete.lightBlack};
  &:hover {
    transition: .1s;
    color: ${collorPallete.darkestWhite};
    text-shadow: 0 0 2px #000;
    -moz-text-shadow: 0 0 2px #000;
    -webkit-text-shadow: 0 0 2px #000;
  }
  i {
    font-size: 35px;
  }
`