import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import {Button, PreviewItem} from '../../components';
import {LIST_CONTAINER_STYLES} from '../../styles';

import styles from './home.styles';

export const API_URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

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
  <Button style={styles.addPaletteButton} type="default" onPress={onPress}>
    <Text style={styles.addPaletteButtonText}>Add New Colour Scheme</Text>
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
      setPalettes(currentPalettes => [params.newPalette, ...currentPalettes]);
    }
  }, [params?.newPalette]);

  return (
    <View style={styles.container}>
      <FlatList
        data={palettes}
        style={LIST_CONTAINER_STYLES}
        accessibilityLabel="colour-palettes"
        keyExtractor={({paletteName}) => paletteName}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        renderItem={({item}) => (
          <ListItem item={item} navigation={navigation} />
        )}
        ListHeaderComponent={
          <ListHeader onPress={handleAddColorPress} navigation={navigation} />
        }
      />
    </View>
  );
};
