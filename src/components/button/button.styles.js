import {StyleSheet} from 'react-native';

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
    color: 'white',
    borderColor: '#20B2AA',
    ...COMMON_BUTTON_STYLES,
  },
  buttonSecondary: {
    ...COMMON_BUTTON_STYLES,
  },
  buttonDefault: {
    ...COMMON_BUTTON_STYLES,
  },
  buttonNone: {},
});

export default styles;
