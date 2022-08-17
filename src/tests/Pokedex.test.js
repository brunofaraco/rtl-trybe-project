import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test "Pokedex" component', () => {
  test('', () => {
    //  Acessar
    renderWithRouter(<App />);
    const POKEDEX_H2 = screen.getByRole(
      'heading', { name: /encountered pokémons/i, level: 2 },
    );

    //  Agir
    // Não foi necessário

    //  Aferir
    expect(POKEDEX_H2).toBeInTheDocument();
  });

  test('', () => {
    //  Acessar

    //  Agir

    //  Aferir
  });

  // test('', () => {
  //   //  Acessar

  //   //  Agir

  //   //  Aferir
  // });
});
