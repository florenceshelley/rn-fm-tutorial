import {StyleSheet} from 'react-native';

export const BUTTON_COLORS = {
  PRIMARY: 'white',
  SECONDARY: '#66CDAA',
  DEFAULT: '#888',
};

const COMMON_BUTTON_STYLES = {
  borderWidth: 1,
  borderRadius: 25,
  borderStyle: 'solid',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    color: '#000',
  },
  buttonPrimary: {
    backgroundColor: '#66CDAA',
    borderColor: '#20B2AA',
    color: BUTTON_COLORS.PRIMARY,
    ...COMMON_BUTTON_STYLES,
  },
  buttonSecondary: {
    backgroundColor: 'white',
    borderColor: BUTTON_COLORS.SECONDARY,
    color: BUTTON_COLORS.SECONDARY,
    ...COMMON_BUTTON_STYLES,
  },
  buttonDefault: {
    backgroundColor: 'white',
    borderColor: BUTTON_COLORS.DEFAULT,
    color: BUTTON_COLORS.DEFAULT,
    ...COMMON_BUTTON_STYLES,
  },
  buttonNone: {},
});

export default styles;
