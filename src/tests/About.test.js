import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

describe('Test "About" component', () => {
  test('if it have info about Pokedex', () => {
    //  Acessar
    renderWithRouter(<About />);
    const POKEDEX_PARAGRAPH = screen.getByText(/this application simulates a pokédex/i);

    // Agir
    // Não foi necessário

    // Aferir
    expect(POKEDEX_PARAGRAPH).toBeInTheDocument();
  });

  test('if it have a h2 written "About Pokédex"', () => {
    //  Acessar
    renderWithRouter(<About />);
    const POKEDEX_H2 = screen.getByText(/about pokédex/i);

    // Agir
    // Não foi necessário

    // Aferir
    expect(POKEDEX_H2).toBeInTheDocument();
  });

  test('if it have 2 "p" elements', () => {
    //  Acessar
    renderWithRouter(<About />);
    const paragraphsArray = screen.getAllByText(/Pokémons/);
    const paragraphsArrayLength = 2;

    // Agir
    // Não foi necessário

    // Aferir
    expect(paragraphsArray.length).toBe(paragraphsArrayLength);
  });

  test('if the Pokedex URL is the right one', () => {
    //  Acessar
    renderWithRouter(<About />);
    const POKEDEX_IMG_ELEMENT = screen.getByRole('img');
    const POKEDEX_IMG_URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    // Agir
    // Não foi necessário

    // Aferir
    expect(POKEDEX_IMG_ELEMENT).toHaveAttribute('src', POKEDEX_IMG_URL);
  });
});
