import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './box.styles';

const Box = ({color: {colorName, hexCode}}) => {
  const background = {backgroundColor: hexCode};

  // Determine whether text should display in dark or light depending on bg color
  const isLightBg = parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1;
  const fontColor = isLightBg ? styles.boxDarkText : styles.boxLightText;

  return (
    <View style={[styles.box, background]}>
      <Text style={[styles.boxText, fontColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

export default Box;
