import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './button.styles';

const getButtonType = type => {
  switch (type) {
    case 'primary':
      return styles.buttonPrimary;
    case 'secondary':
      return styles.buttonSecondary;
    case 'default':
      return styles.buttonDefault;
    case 'none':
    default:
      return styles.buttonNone;
  }
};

export const Button = ({onPress, style, type, children}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={[styles.button, getButtonType(type), style]}>
      {children}
    </View>
  </TouchableOpacity>
);
