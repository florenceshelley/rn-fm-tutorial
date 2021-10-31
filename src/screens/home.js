import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';

import {Button, PreviewItem} from '../components';
import {LIST_CONTAINERS_STYLES} from '../styles';

const ListItem = ({item, navigation}) => {
  const options = {paletteName: item.paletteName, colors: item.colors};
  const onPressHandler = () => navigation.navigate('ColorPalette', options);
  return (
    <Button onPress={onPressHandler}>
      <PreviewItem data={item} navigation={navigation} />
    </Button>
  );
};

const ListHeader = ({onPress}) => (
  <Button onPress={onPress}>
    <Text>Add New Colour Scheme</Text>
  </Button>
);

export const Home = ({navigation, route: {params}}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [palettes, setPalettes] = useState([]);

  const handleAddColorPress = () => {
    navigation.navigate('AddColorPaletteModal');
  };

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();

    // set a timer so that we can see the indicator longer
    // we can remove the timer function once the network response is bigger
    setTimeout(() => setIsRefreshing(false), 500);
  }, [fetchColorPalettes]);

  const fetchColorPalettes = useCallback(async () => {
    const API_URL = 'https://color-palette-api.kadikraman.now.sh/palettes';
    const result = await fetch(API_URL);

    if (result.ok) {
      const paletteJson = await result.json();
      setPalettes(paletteJson);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  useEffect(() => {
    if (params?.newPalette) {
      setPalettes([params.newPalette, ...palettes]);
    }
  }, [params?.newPalette]);

  return (
    <FlatList
      data={palettes}
      style={LIST_CONTAINERS_STYLES}
      keyExtractor={({paletteName}) => paletteName}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      renderItem={({item}) => <ListItem item={item} navigation={navigation} />}
      ListHeaderComponent={
        <ListHeader onPress={handleAddColorPress} navigation={navigation} />
      }
    />
  );
};
