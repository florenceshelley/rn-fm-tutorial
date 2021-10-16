import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './button.styles';

export const Button = ({onPress, children}) => (
  <View style={styles.button}>
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  </View>
);
