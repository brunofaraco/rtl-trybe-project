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

  test('if the card have the right URL', () => {
    //  Acessar
    renderWithRouter(<App />);
    const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });

    // Agir
    // Não foi necessário

    // Aferir
    expect(MORE_DETAILS_LINK).toBeInTheDocument();
    expect(MORE_DETAILS_LINK).toHaveAttribute('href', '/pokemons/25');
  });

  test('if when you click in the link, you go to the right URL', () => {
    //  Acessar
    const { history } = renderWithRouter(<App />);
    const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });

    // Agir
    userEvent.click(MORE_DETAILS_LINK);
    const PIKACHU_DETAILS_HEADING = screen
      .getByRole('heading', { name: /pikachu details/i, level: 2 });

    // Aferir
    expect(PIKACHU_DETAILS_HEADING).toBeInTheDocument();
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  test('if when you favorite, the star image appears', () => {
    //  Acessar
    renderWithRouter(<App />);
    const MORE_DETAILS_LINK = screen.getByRole('link', { name: /more details/i });

    // Agir
    userEvent.click(MORE_DETAILS_LINK);

    const FAVORITE_CHECKBOX = screen.getByLabelText(/pokémon favoritado/i);
    userEvent.click(FAVORITE_CHECKBOX);
    const STAR_IMG = screen.getByRole('img', { name: /marked as favorite/i });

    // Aferir
    expect(STAR_IMG).toHaveAttribute('src', '/star-icon.svg');
    expect(STAR_IMG).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
