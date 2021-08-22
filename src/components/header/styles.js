import styled from 'styled-components';
import collorPallete from '../../utils/collor-pallete'

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow-x: hidden;
  background-color: ${collorPallete.lightBlack};
  height: 50px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 800px;
  max-width: 1850px;
  position: relative;
  input {
    background-color: ${collorPallete.lightestBlack};
    width: 550px;
    height: 30px;
    transition: 0.2s;
    border-radius: 5px;
    border: 0.1px solid ${collorPallete.lightBlack};
    font-size: 18px;
    font-weight: 900;
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
  }
`
export const SearchBtn = styled.button`
  color: inherit;
  background-color: none;
  background: none;
  margin-right: 15px;
  padding: 5px 2px 2px 2px;
  border: 0.1px solid ${collorPallete.lightBlack};
  outline: none;
  border-radius: 4px;
  &:hover {
    transition: .1s;
    color: ${collorPallete.lightBlack};
    background-color: ${collorPallete.darkWhite};
    border: 0.1px solid rgba(0, 0, 0, 0.5);
  }
  i {
    font-size: 33px;
    width: 38px;
  }
`

export const HomeBtn = styled.button`
  color: inherit;
  background-color: none;
  background: none;
  position: relative;
  left: 5px;
  padding: 2px;
  border: 0.1px solid ${collorPallete.lightBlack};
  outline: none;
  border-radius: 4px;
  &:hover {
    transition: .1s;
    color: ${collorPallete.lightBlack};
    background-color: ${collorPallete.darkWhite};
    border: 0.1px solid rgba(0, 0, 0, 0.5);
  }
  i {
    font-size: 33px;
    width: 38px;
  }
`

export const FavBtn = styled.button`
  color: inherit;
  background-color: none;
  background: none;
  position: relative;
  left: 10px;
  padding: 2px;
  margin-right: 15px;
  padding: 5px 2px 2px 2px;
  border: 0.1px solid ${collorPallete.lightBlack};
  outline: none;
  border-radius: 4px;
  &:hover {
    transition: .1s;
    color: crimson;
  }
  i {
    font-size: 33px;
    width: 38px;
  }
`