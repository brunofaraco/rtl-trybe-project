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

  test('if exists a section with maps containing the pokemon location', () => {
    //  Acessar
    renderWithRouter(<App />);
    const NEXT_POKEMON_BUTTON = screen.getByRole('button', { name: /próximo/i });

    // Agir
    userEvent.click(NEXT_POKEMON_BUTTON);

    const MORE_DETAILS_CHARMANDER = screen.getByRole('link', { name: /details/i });
    userEvent.click(MORE_DETAILS_CHARMANDER);

    const CHARMANDER_GAME_LOCATIONS_HEADING = screen
      .getByRole('heading', { name: /game locations of charmander/i, level: 2 });

    const CHARMANDER_LOCATIONS_MAPS_IMG = screen.getAllByAltText(/charmander location/i);
    const CHARMANDER_LOCATIONS = 4;

    const CHARMANDER_FIRST_MAP = CHARMANDER_LOCATIONS_MAPS_IMG[0];
    const CHARMANDER_FIRST_MAP_SRC = 'https://cdn2.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png';
    const CHARMANDER_FIRST_MAP_ALT = 'Charmander location';

    // Aferir
    expect(CHARMANDER_GAME_LOCATIONS_HEADING).toBeInTheDocument();
    expect(CHARMANDER_LOCATIONS_MAPS_IMG).toHaveLength(CHARMANDER_LOCATIONS);
    expect(CHARMANDER_FIRST_MAP).toHaveAttribute('src', CHARMANDER_FIRST_MAP_SRC);
    expect(CHARMANDER_FIRST_MAP).toHaveAttribute('alt', CHARMANDER_FIRST_MAP_ALT);
  });

  test('if the user can favorite the pokemon', () => {
    //  Acessar
    renderWithRouter(<App />);
    const NEXT_POKEMON_BUTTON = screen.getByRole('button', { name: /próximo/i });

    // Agir
    userEvent.click(NEXT_POKEMON_BUTTON);

    const MORE_DETAILS_CHARMANDER = screen.getByRole('link', { name: /details/i });
    userEvent.click(MORE_DETAILS_CHARMANDER);

    const FAVORITE_CHECKBOX = screen.getByLabelText(/pokémon favoritado\?/i);

    userEvent.click(FAVORITE_CHECKBOX);
    const STAR_IMG = screen.getByRole('img', { name: /is marked as favorite/i });
    expect(STAR_IMG).toBeInTheDocument();

    userEvent.click(FAVORITE_CHECKBOX);
    expect(STAR_IMG).not.toBeInTheDocument();

    // Aferir
    expect(FAVORITE_CHECKBOX).toBeInTheDocument();
  });
});
