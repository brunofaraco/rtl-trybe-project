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

    // Agir
    // Não foi necessário

    // Aferir
    expect(POKEMON_NAME).toBeInTheDocument();
    expect(POKEMON_TYPE).toBeInTheDocument();
    expect(POKEMON_WEIGHT).toBeInTheDocument();
    expect(MORE_DETAILS_LINK).toBeInTheDocument();
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

  // test('if the link has the right ID', () => {
  //   // Acessar
  //   const { history } = renderWithRouter(<App />);
  //   const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });
  //   const PIKACHU_ID = 25;
  //   const EXPECTED_PATHNAME = `/pokemons/${PIKACHU_ID}`;

  //   // Agir
  //   userEvent.click(MORE_DETAILS_LINK);

  //   // Aferir
  //   expect(history.location.pathname).toBe(EXPECTED_PATHNAME);
  // });
});
