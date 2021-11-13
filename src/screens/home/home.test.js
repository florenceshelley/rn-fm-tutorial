import React from 'react';
import fetch from 'jest-fetch-mock';
import {render} from '@testing-library/react-native';

import {Home, API_URL} from './home';

import colourPalettesMock from '../../__tests__/fixtures/colour-palettes.fixture.json';

const mockNavigation = jest.fn();

const navigationProps = {
  navigation: mockNavigation,
  route: {params: {}},
};

describe('Home', () => {
  describe('on render', () => {
    it('fetches the existing colour palettes', async () => {
      render(<Home {...navigationProps} />);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(API_URL);
    });

    it('displays the fetched colour palettes', async () => {
      fetch.once(JSON.stringify(colourPalettesMock));
      const {findByText} = render(<Home {...navigationProps} />);

      const solarized = await findByText('Solarized');
      expect(solarized).toBeDefined();
    });
  });
});
