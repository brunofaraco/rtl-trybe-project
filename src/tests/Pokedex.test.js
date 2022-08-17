import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test "Pokedex" component', () => {
  test('if the page has the right H2', () => {
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

  test('if when you click in the "Next button" you go to Charmander', () => {
    //  Acessar
    renderWithRouter(<App />);
    const NEXT_BUTTON = screen.getByRole('button', { name: /próximo/i });
    //  Agir
    userEvent.click(NEXT_BUTTON);
    const CHARMANDER_NAME = screen.getByText(/charmander/i);

    //  Aferir
    expect(CHARMANDER_NAME).toBeInTheDocument();
  });

  // test('', () => {
  //   //  Acessar

  //   //  Agir

  //   //  Aferir
  // });
});
