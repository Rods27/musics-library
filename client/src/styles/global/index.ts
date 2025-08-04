import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #ece8e8;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #BBB5B5;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #434343;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #333;
}
`; 