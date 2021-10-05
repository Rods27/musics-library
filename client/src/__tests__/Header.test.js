import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components';
import { Provider } from "react-redux";
import history from '../utils/history';
import * as redux from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({});

const headerComponent = () => {
  render(
    <Provider store={store}>
        <Header history={ history} />
    </Provider>
  );
};

describe('Header component', () => {
  it('os elementos deverão estar na página.', () => {
    headerComponent();
    const searchBtn = screen.getByTestId('search-btn');
    const searchInput = screen.getByTestId('search-input');
    const favoritesBtn = screen.getByTestId('favorite-btn');
    const homeBtn = screen.getByTestId('home-btn');
    expect(searchBtn).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(homeBtn).toBeInTheDocument();
    expect(favoritesBtn).toBeInTheDocument();
  });
  describe('Favorite button', () => {
    it('ao ser clicado direcionar o usuário a pagina de favoritos', () => {
      headerComponent();
      const favoritesBtn = screen.getByTestId('favorite-btn');
      expect(favoritesBtn).toBeInTheDocument();
      fireEvent.click(favoritesBtn);
      const { pathname } = history.location;
      expect(pathname).toBe('/musics/favorites');
    })
  });
  describe('Home button', () => {
    it('ao ser clicado deverá direcionar o usuario a pagina de musicas', () => {
      headerComponent();
      history.push('/musics/favorites');
      const homeBtn = screen.getByTestId('home-btn');
      fireEvent.click(homeBtn);
      const { pathname } = history.location;
      expect(pathname).toBe('/musics');
    });
  });
  describe('Search button e input', () => {
    it('deverá pesquisar pela query digitada no input', () => {
      const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
      const dispatchQueryMusics = jest.fn();
      useDispatchSpy.mockReturnValue(dispatchQueryMusics)
      render(
        <Provider store={store}>
            <Header history={ history} dispatchQueryMusics={dispatchQueryMusics}/>
        </Provider>
      )
      const searchBtn = screen.getByTestId('search-btn');
      const searchInput = screen.getByTestId('search-input');
      fireEvent.change(searchInput, { target: { value: 'Eminem' } });
      expect(searchInput.value).toBe('Eminem');
      fireEvent.click(searchBtn);
      expect(useDispatchSpy).toHaveBeenCalledTimes(1);
      expect(dispatchQueryMusics).toHaveBeenCalledTimes(1);
    });
  });
});