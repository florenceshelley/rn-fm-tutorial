import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './button.styles';

const Button = ({onPress, text}) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Text onPress={onPress}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default Button;
