import React from 'react';
import {FlatList, View} from 'react-native';

import {Box} from '../../components';
import styles from './color-palette.styles';

export const ColorPalette = ({route: {params}}) => {
  const {colors} = params;
  return (
    <View style={styles.header}>
      <FlatList
        data={colors}
        keyExtractor={({colorName}) => colorName}
        renderItem={({item}) => <Box color={item} />}
      />
    </View>
  );
};
