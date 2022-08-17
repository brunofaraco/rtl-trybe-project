import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test "Pokemon" component', () => {
  test('', () => {
    // Acessar
    renderWithRouter(<App />);
    const POKEMON_NAME = screen.getByTestId('pokemon-name');
    const POKEMON_TYPE = screen.getByTestId('pokemon-type');
    const POKEMON_WEIGHT = screen.getByTestId('pokemon-weight');
    const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });

    // Agir
    // Não foi necessário

    // Aferir
    expect(POKEMON_NAME).toBeInTheDocument();
    expect(POKEMON_TYPE).toBeInTheDocument();
    expect(POKEMON_WEIGHT).toBeInTheDocument();
    expect(MORE_DETAILS_LINK).toBeInTheDocument();
  });
});
