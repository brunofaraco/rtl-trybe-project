import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';

describe('Test "App" component', () => {
  test('if nav links are in the top of "App"', () => {
    //  Acessar
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favoritePokemonsLink = screen.getByRole('link', { name: /favorite pokémons/i });
    // Agir

    // Aferir
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoritePokemonsLink).toBeInTheDocument();
  });
  // test('should second', () => {
  //   //  Acessar

  //   // Agir

  //   // Aferir
  // });
  // test('should third', () => {
  //   //  Acessar

  //   // Agir

  //   // Aferir
  // });
  // test('should fourth', () => {
  //   //  Acessar

  //   // Agir

  //   // Aferir
  // });
  // test('should fifth', () => {
  //   //  Acessar

  //   // Agir

  //   // Aferir
  // });
});
