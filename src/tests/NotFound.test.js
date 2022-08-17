import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test "Not Found" component', () => {
  test('when you go to a invalid URL,you are redirect to "NotFound"', () => {
    //  Acessar
    const { history } = renderWithRouter(<App />);

    // Agir
    history.push('/SAHUSAHUSA');

    const titleNotFound = screen.getByRole(
      'heading', { name: /page requested not found/i, level: 2 },
    );
    // Aferir
    expect(titleNotFound).toBeInTheDocument();
  });

  test('if the NotFound image URL is the right one', () => {
    //  Acessar
    const { history } = renderWithRouter(<App />);

    // Agir
    history.push('/SAHUSAHUSA');

    const notFoundImgElement = screen.getByAltText(/pikachu crying/i);
    const notFoundImgURL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    // Aferir
    expect(notFoundImgElement).toHaveAttribute('src', notFoundImgURL);
  });
});
