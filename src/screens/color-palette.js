import React from 'react';
import {FlatList} from 'react-native';

import {Box} from '../components';
import {LIST_CONTAINERS_STYLES} from '../styles';

export const ColorPalette = ({route: {params}}) => {
  const {colors} = params;
  return (
    <FlatList
      data={colors}
      style={LIST_CONTAINERS_STYLES}
      keyExtractor={({colorName}) => colorName}
      renderItem={({item}) => <Box color={item} />}
    />
  );
};
