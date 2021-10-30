import React, {useState, useCallback} from 'react';
import {Alert, FlatList, Switch, Text, TextInput, View} from 'react-native';

import {COLORS} from '../colors';
import {Button} from '../components';

const ColorToggle = ({item, colors, setColors}) => {
  const [isItemEnabled, setIsItemEnabled] = useState(false);
  const {colorName} = item;

  const handleChange = () => {
    if (isItemEnabled) {
      const newColors = colors.filter(color => color !== item);
      setColors(newColors);
      setIsItemEnabled(false);
    } else {
      setColors([...colors, item]);
      setIsItemEnabled(true);
    }
  };

  return (
    <View>
      <Text>{colorName}</Text>
      <Switch value={isItemEnabled} onChange={handleChange} />
    </View>
  );
};

export const ColorPaletteForm = ({navigation}) => {
  const [paletteName, setPaletteName] = useState('');
  const [colors, setColors] = useState([]);

  const handleSubmit = useCallback(() => {
    const MINIMUM_COLORS = 5;
    const options = {newPalette: {paletteName, colors}};

    if (!paletteName) {
      Alert.alert('Error', 'Please enter a palette name.', 'OK');
    } else if (paletteName && colors.length < MINIMUM_COLORS) {
      Alert.alert('Error', `Please select at least ${MINIMUM_COLORS} colours.`, 'OK');
    } else {
      navigation.navigate('Home', options);
    }
  }, [paletteName, colors]);

  return (
    <View>
      <FlatList
        data={COLORS.filter(color => color.isShown)}
        keyExtractor={({colorName}) => colorName}
        renderItem={({item}) => (
          <ColorToggle item={item} colors={colors} setColors={setColors} />
        )}
        ListHeaderComponent={() => (
          <TextInput
            value={paletteName}
            placeholder="Palette Name"
            onChangeText={setPaletteName}
          />
        )}
        ListFooterComponent={() => (
          <Button onPress={handleSubmit}>
            <Text>Submit</Text>
          </Button>
        )}
      />
    </View>
  );
};
