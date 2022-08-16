import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test "App" component', () => {
  test('if nav links are in the top of "App"', () => {
    //  Acessar
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favoritePokemonsLink = screen.getByRole('link', { name: /favorite pokémons/i });

    // Agir
    // Não foi necessário

    // Aferir
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoritePokemonsLink).toBeInTheDocument();
  });
  test('when you click in "Home", you are redirect to "/"', () => {
    //  Acessar
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });

    // Agir
    userEvent.click(homeLink);

    // Aferir
    expect(history.location.pathname).toBe('/');
  });
  test('when you click in "About", you are redirect to "/about"', () => {
    //  Acessar
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /about/i });

    // Agir
    userEvent.click(homeLink);

    // Aferir
    expect(history.location.pathname).toBe('/about');
  });
  test('when you click in "Favorite Pokemons",you are redirect to "/favorites"', () => {
    //  Acessar
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /favorite pokémons/i });

    // Agir
    userEvent.click(homeLink);

    // Aferir
    expect(history.location.pathname).toBe('/favorites');
  });
  test('when you click go to a invalid URL,you are redirect to "NotFound"', () => {
    //  Acessar
    const { history } = renderWithRouter(<App />);

    // Agir
    history.push('/SAHUSAHUSA');

    const titleNotFound = screen.getByRole(
      'heading', { name: /page requested not found/i, level: 2 },
    );
    // Aferir
    expect(titleNotFound).toBeInTheDocument();
  });
});
