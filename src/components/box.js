import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './box.styles';

const Box = ({color: {colorName, hexCode}}) => {
  const background = {backgroundColor: hexCode};
  return (
    <View style={[styles.box, background]}>
      <Text style={styles.boxText}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

export default Box;
