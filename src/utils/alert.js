import {Alert} from 'react-native';

const ALERT_TYPES = {
  MISSING_INPUT: 'MISSING_INPUT',
};

export const alert = (message, type = 'MISSING_INPUT') => {
  if (type === ALERT_TYPES.MISSING_INPUT) {
    return Alert.alert('Whoops!', message, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);
  }
};
