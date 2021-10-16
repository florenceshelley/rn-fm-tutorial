import React from 'react';
import {FlatList} from 'react-native';

import {COLOR_PALETTES} from '../palettes';
import {LIST_CONTAINERS_STYLES} from '../styles';
import {Button, PreviewItem} from '../components';

const ListItem = ({item, navigation}) => {
  const options = {paletteName: item.name, colors: item.colors};
  const onPressHandler = () => navigation.navigate('ColorPalette', options);
  return (
    <Button onPress={onPressHandler}>
      <PreviewItem data={item} navigation={navigation} />
    </Button>
  );
};

export const Home = ({navigation}) => (
  <FlatList
    data={COLOR_PALETTES}
    style={LIST_CONTAINERS_STYLES}
    keyExtractor={({name}) => name}
    renderItem={({item}) => <ListItem item={item} navigation={navigation} />}
  />
);
