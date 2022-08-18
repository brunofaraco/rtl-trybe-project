import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Test the "PokemonDetails" component', () => {
  test('if the infos in "More Details" are right', () => {
    //  Acessar
    renderWithRouter(<App />);
    const NEXT_POKEMON_BUTTON = screen.getByRole('button', { name: /próximo/i });

    // Agir
    userEvent.click(NEXT_POKEMON_BUTTON);

    const MORE_DETAILS_CHARMANDER = screen.getByRole('link', { name: /details/i });
    userEvent.click(MORE_DETAILS_CHARMANDER);

    const CHARMANDER_DETAILS_HEADING = screen
      .getByRole('heading', { name: /charmander details/i, level: 2 });
    const CHARMANDER_DETAILS_SUMMARY = screen
      .getByRole('heading', { name: /summary/i, level: 2 });
    const SUMMARY_PARAGRAPH = screen.getByText(/the flame on its tail/i);

    // Aferir
    expect(CHARMANDER_DETAILS_HEADING).toBeInTheDocument();
    expect(MORE_DETAILS_CHARMANDER).not.toBeInTheDocument();
    expect(CHARMANDER_DETAILS_SUMMARY).toBeInTheDocument();
    expect(SUMMARY_PARAGRAPH).toBeInTheDocument();
  });

  // test('', () => {
  //   //  Acessar

  //   // Agir
  //   // Não foi necessário

  //   // Aferir
  // });

  // test('', () => {
  //   //  Acessar

  //   // Agir
  //   // Não foi necessário

  //   // Aferir
  // });
});
