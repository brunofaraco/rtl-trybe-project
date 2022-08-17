import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from './renderWithRouter';

describe('Test Favorite Pokémons component', () => {
  test('if the right message appears when no Pokémon is selected', () => {
    // Acessar
    renderWithRouter(<FavoritePokemons />);
    const RIGHT_PARAGRAPH = screen.getByText(/no favorite/i);
    // Agir

    // Aferir
    expect(RIGHT_PARAGRAPH).toBeInTheDocument();
  });

  // test('', () => {
  //   // Acessar

  //   // Agir

  //   // Aferir
  // });
});
