import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';

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

export const Home = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [palettes, setPalettes] = useState([]);

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

  return (
    <FlatList
      data={palettes}
      style={LIST_CONTAINERS_STYLES}
      keyExtractor={({paletteName}) => paletteName}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      renderItem={({item}) => <ListItem item={item} navigation={navigation} />}
    />
  );
};
