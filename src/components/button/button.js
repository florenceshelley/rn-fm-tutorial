import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './button.styles';

export const Button = ({onPress, children}) => (
  <View style={styles.button}>
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  </View>
);
