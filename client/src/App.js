import React from 'react';
import Routes from './routes';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './styles/global'

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <Routes history={ createBrowserHistory() }/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
