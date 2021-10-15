import React from 'react';
import {FlatList, Text, View} from 'react-native';

import Box from '../../components/box/box';
import {styles} from './color-palette.styles';

export const ColorPalette = ({route: {params}}) => {
  const {colors, paletteName} = params;
  return (
    <View style={styles.header}>
      <FlatList
        data={colors}
        keyExtractor={({colorName}) => colorName}
        renderItem={({item}) => <Box color={item} />}
        ListHeaderComponent={
          <Text style={styles.headerText}>{paletteName}</Text>
        }
      />
    </View>
  );
};
