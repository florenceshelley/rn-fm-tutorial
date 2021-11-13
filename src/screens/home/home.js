import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useFetch, useRefresh} from '../../hooks';
import {Button, LoadingIndicator, PreviewItem} from '../../components';
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
  const [palettes, setPalettes] = useState([]);
  const {isRefreshing, refresh} = useRefresh(API_URL);
  const {loading: fetchLoading, data: fetchData} = useFetch(API_URL);

  const handleAddColorPress = () => {
    navigation.navigate('AddColorPaletteModal');
  };

  const handleRefresh = useCallback(async () => {
    await refresh();
  });

  useEffect(() => {
    if (!fetchLoading) {
      setPalettes(fetchData);
    }
  }, [fetchLoading, fetchData]);

  useEffect(() => {
    if (params?.newPalette) {
      setPalettes(currentPalettes => [params.newPalette, ...currentPalettes]);
    }
  }, [params?.newPalette]);

  return (
    <View style={styles.container}>
      {fetchLoading ? (
        <LoadingIndicator />
      ) : (
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
      )}
    </View>
  );
};
