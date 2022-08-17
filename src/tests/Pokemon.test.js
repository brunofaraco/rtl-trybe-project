import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test "Pokemon" component', () => {
  test('if the right card is rendered', () => {
    // Acessar
    renderWithRouter(<App />);
    const POKEMON_NAME = screen.getByText(/pikachu/i);
    const POKEMON_TYPE = screen.getAllByText(/electric/i)[0];
    const POKEMON_WEIGHT = screen.getByText(/average/i);
    const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });
    const PIKACHU_IMG = screen.getByRole('img', { name: /pikachu sprite/i });
    const PIKACHU_IMG_SRC = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    // Agir
    // Não foi necessário

    // Aferir
    expect(POKEMON_NAME).toBeInTheDocument();
    expect(POKEMON_TYPE).toBeInTheDocument();
    expect(POKEMON_WEIGHT).toBeInTheDocument();
    expect(MORE_DETAILS_LINK).toBeInTheDocument();
    expect(PIKACHU_IMG).toHaveAttribute('src', PIKACHU_IMG_SRC);
  });

  test('test if the link have the right "href"', () => {
    //  Acessar
    renderWithRouter(<App />);
    const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });
    const PIKACHU_ID = 25;
    const EXPECTED_PATHNAME = `/pokemons/${PIKACHU_ID}`;
    // Agir

    // Aferir
    expect(MORE_DETAILS_LINK).toHaveAttribute('href', EXPECTED_PATHNAME);
  });

  test('if the link has the right ID', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);
    const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });
    const PIKACHU_ID = 25;
    const EXPECTED_PATHNAME = `/pokemons/${PIKACHU_ID}`;

    // Agir
    userEvent.click(MORE_DETAILS_LINK);

    // Aferir
    expect(history.location.pathname).toBe(EXPECTED_PATHNAME);
  });

  test('if the favorite icon appears when you click in the checkbox', () => {
    // Acessar
    renderWithRouter(<App />);
    const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });

    // Agir
    userEvent.click(MORE_DETAILS_LINK);
    const FAVORITE_CHECKBOX = screen.getByLabelText(/pokémon favoritado/i);
    userEvent.click(FAVORITE_CHECKBOX);
    const FAVORITE_ICON_ELEMENT = screen.getByRole('img', { name: /pikachu is marked/i });
    const FAVORITE_ICON_SRC = '/star-icon.svg';

    // Aferir
    expect(FAVORITE_ICON_ELEMENT).toBeInTheDocument();
    expect(FAVORITE_ICON_ELEMENT).toHaveAttribute('src', FAVORITE_ICON_SRC);
  });

  // test('', () => {
  //   // Acessar

  //   // Agir

  //   // Aferir
  // });
});
