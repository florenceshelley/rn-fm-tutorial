import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import {COLORS} from '../../constants';
import Box from '../../components/box/box';
import {styles} from './color-palette.styles';

export const ColorPalette = () => (
  <SafeAreaView>
    <View style={styles.header}>
      <FlatList
        data={COLORS}
        keyExtractor={({colorName}) => colorName}
        renderItem={({item}) => <Box color={item} />}
        ListHeaderComponent={<Text style={styles.headerText}>Solarized</Text>}
      />
    </View>
  </SafeAreaView>
);
