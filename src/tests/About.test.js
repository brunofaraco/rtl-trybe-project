import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

describe('Test "About" component', () => {
  test('if it have info about Pokedex', () => {
    //  Acessar
    renderWithRouter(<About />);
    // Agir
    const pokedexParagraph = screen.getByText(/this application simulates a pokédex/i);

    // Aferir
    expect(pokedexParagraph).toBeInTheDocument();
  });

  // test('', () => {
  //   //  Acessar

  //   // Agir

  //   // Aferir

  // });
});
