import {StyleSheet} from 'react-native';

import {BORDER_STYLES} from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  formLabel: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  paletteNameInput: {
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    ...BORDER_STYLES,
  },
  colorToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPreview: {
    padding: 10,
  },
  colorName: {
    marginLeft: 10,
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: '#66cdaa',
    alignItems: 'center',

    ...BORDER_STYLES,
    // Override global border radius
    borderColor: '#20b2aa',
    borderRadius: 25,
  },
  submitButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
