import React from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';

import {useFetch, useRefresh} from '../../hooks';
import mockResponse from '../../__tests__/fixtures/colour-palettes.fixture.json';

import {Home, API_URL} from './home';

const mockNavigate = jest.fn();

const navigationProps = {
  navigation: {navigate: mockNavigate},
  route: {params: {}},
};

jest.mock('../../hooks', () => ({
  useFetch: jest.fn(),
  useRefresh: jest.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    useFetch.mockReturnValue({loading: false, data: mockResponse});
    useRefresh.mockReturnValue({isRefreshing: false, refresh: jest.fn()});
  });

  describe('on render', () => {
    it('fetches the existing colour palettes', async () => {
      render(<Home {...navigationProps} />);

      expect(useFetch).toHaveBeenCalledWith(API_URL);
    });

    it('displays the fetched colour palettes', async () => {
      const {findByText} = render(<Home {...navigationProps} />);

      const palette = await findByText('Thought Provoking');
      expect(palette).toBeDefined();
    });
  });

  describe('on palette preview press', () => {
    const paletteDetails = {
      paletteName: 'Thought Provoking',
      colors: [
        {
          colorName: 'Yellow',
          hexCode: '#ECD078',
        },
        {
          colorName: 'Orange',
          hexCode: '#D95B43',
        },
        {
          colorName: 'Red',
          hexCode: '#C02942',
        },
        {
          colorName: 'Crimson',
          hexCode: '#542437',
        },
        {
          colorName: 'Clay',
          hexCode: '#53777A',
        },
      ],
    };

    it('should navigate to palette details screen', async () => {
      const {findByText} = render(<Home {...navigationProps} />);

      const palette = await findByText('Thought Provoking');
      await act(() => {
        fireEvent.press(palette);
      });

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('ColorPalette', paletteDetails);
    });
  });

  describe('on header button press', () => {
    it('should navigate to form modal', async () => {
      const {findByText} = render(<Home {...navigationProps} />);

      const formButton = await findByText('Add New Colour Scheme');
      expect(formButton).toBeDefined();

      act(() => {
        fireEvent.press(formButton);
      });

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('AddColorPaletteModal');
    });
  });
});
