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

  test('if when you click in the "Next button" you go to the next Pokemon', () => {
    //  Acessar
    renderWithRouter(<App />);
    const NEXT_BUTTON = screen.getByTestId('next-pokemon');

    //  Agir
    const POKEMONS_ARR = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam',
      'Mew', 'Rapidash', 'Snorlax', 'Dragonair'];

    //  Aferir
    POKEMONS_ARR.forEach((pokemon) => {
      const POKEMON_ELEMENT = screen.getByText(pokemon);
      expect(POKEMON_ELEMENT).toBeInTheDocument();
      userEvent.click(NEXT_BUTTON);
    });
    const PIKACHU_ELEMENT = screen.getByText(/pikachu/i);
    expect(PIKACHU_ELEMENT).toBeInTheDocument();
  });

  test('if shows just one Pokemon', () => {
    //  Acessar
    renderWithRouter(<App />);
    const ACTUAL_POKEMON = screen.getAllByTestId('pokemon-name');
    const ACTUAL_POKEMON_LENGTH = 1;

    //  Agir
    // Não foi necessário

    //  Aferir
    expect(ACTUAL_POKEMON.length).toBe(ACTUAL_POKEMON_LENGTH);
  });

  // test('', () => {
  //   //  Acessar

  //   //  Agir

  //   //  Aferir
  // });

  // test('', () => {
  //   //  Acessar

  //   //  Agir

  //   //  Aferir
  // });
});
