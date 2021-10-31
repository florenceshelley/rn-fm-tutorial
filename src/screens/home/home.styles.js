import {StyleSheet} from 'react-native';

import {BUTTON_COLORS} from '../../components';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    backgroundColor: 'white',
  },
  addPaletteButton: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  addPaletteButtonText: {
    fontWeight: 'bold',
    color: BUTTON_COLORS.DEFAULT,
  },
});

export default styles;
