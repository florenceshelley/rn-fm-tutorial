import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './box.styles';

const Box = ({color: [name, hexCode]}) => {
  const background = {backgroundColor: hexCode};
  const colorName = name[0].toUpperCase() + name.slice(1);
  return (
    <View style={[styles.box, background]}>
      <Text style={styles.boxText}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

export default Box;
