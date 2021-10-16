import React from 'react';
import {FlatList} from 'react-native';

import {LIST_CONTAINERS_STYLES} from '../styles';
import {Box} from '../components';

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
