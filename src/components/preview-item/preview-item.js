import React from 'react';
import {FlatList, Text, View} from 'react-native';

import styles from './preview-item.styles';

const PreviewBox = ({color}) => {
  const background = {backgroundColor: color};
  return <View style={[styles.previewBox, background]} />;
};

export const PreviewItem = ({data: {name, colors}}) => {
  const previewColors = colors.slice(0, 5);
  return (
    <View style={styles.container}>
      <Text style={styles.boxHeader}>{name}</Text>
      <FlatList
        data={previewColors}
        keyExtractor={({colorName}) => colorName}
        renderItem={({item: {hexCode}}) => <PreviewBox color={hexCode} />}
        horizontal={true}
      />
    </View>
  );
};
