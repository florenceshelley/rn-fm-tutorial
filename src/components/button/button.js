import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './button.styles';

export const Button = ({onPress, style, children}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={[styles.button, style]}>
      {children}
    </View>
  </TouchableOpacity>
);
