import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
// import Pokemon from '../components/Pokemon';
import App from '../App';

describe('Test "Pokemon" component', () => {
  test('if render Pikachu card', () => {
    //  Acessar
    renderWithRouter(<App />);

    const POKEMON_NAME = screen.getByTestId('pokemon-name');
    const POKEMON_TYPE = screen.getByTestId('pokemon-type');
    const POKEMON_WEIGHT = screen.getByTestId('pokemon-weight');

    const POKEMON_IMG = screen.getByRole('img');
    const POKEMON_IMG_SRC = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const POKEMON_IMG_ALT = 'Pikachu sprite';

    // Agir
    // Não foi necessário

    // Aferir
    expect(POKEMON_NAME).toHaveTextContent(/pikachu/i);
    expect(POKEMON_TYPE).toHaveTextContent(/electric/i);
    expect(POKEMON_WEIGHT).toHaveTextContent(/average weight: 6.0 kg/i);
    expect(POKEMON_IMG).toHaveAttribute('src', POKEMON_IMG_SRC);
    expect(POKEMON_IMG).toHaveAttribute('alt', POKEMON_IMG_ALT);
  });
});
