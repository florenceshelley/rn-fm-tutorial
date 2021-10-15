import React from 'react';
import {FlatList} from 'react-native';

import {COLOR_PALETTES} from '../../constants';
import Button from '../../components/button/button';

// todo: add palette preview
const Item = ({data: {name, colors}, navigation}) => {
  const options = {paletteName: name, colors};
  return (
    <Button
      text={name}
      onPress={() => navigation.navigate('ColorPalette', options)}
    />
  );
};

export const Home = ({navigation}) => (
  <FlatList
    data={COLOR_PALETTES}
    keyExtractor={({name}) => name}
    renderItem={({item}) => <Item data={item} navigation={navigation} />}
  />
);
