import React from 'react';
import {FlatList, Text, View} from 'react-native';

import styles from './preview-item.styles';

export const PreviewBox = ({color, style}) => {
  const background = {backgroundColor: color};
  return <View style={[styles.previewBox, background, style]} />;
};

export const PreviewItem = ({data: {paletteName, colors}}) => {
  const previewColors = colors.slice(0, 5);
  return (
    <View style={styles.container}>
      <Text style={styles.boxHeader}>{paletteName}</Text>
      <FlatList
        data={previewColors}
        keyExtractor={({colorName}) => colorName}
        renderItem={({item: {hexCode}}) => <PreviewBox color={hexCode} />}
        horizontal
      />
    </View>
  );
};
