import styled from 'styled-components';
import collorPallete from '../../utils/collor-pallete'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  flex-wrap: wrap;
  margin: calc(2vh + 95px) 17px 30px 0;
  border-radius: 9px;
  max-width: 900px;
  background-color: ${collorPallete.lightestBlack};
  overflow-y: auto;
  position: relative;
  padding: 20px 0;
  max-height: 1320px;
  @media only screen and (max-width: 1400px) { 
    max-width: 600px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 250px;
  height: 180px;
  background-position: 100% 100%;
  background-size: 100%;
  margin: 7px 10px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 7px;
  text-shadow: 0 0 3px #000;
  -moz-text-shadow: 0 0 3px #000;
  -webkit-text-shadow: 0 0 3px #000;
`;

export const Title = styled.h1`
  margin: 15px 0 0 15px;
  color: white;
  width: 50%;
`;