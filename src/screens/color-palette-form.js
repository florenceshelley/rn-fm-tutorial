import React, {useState} from 'react';
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

    setIsItemEnabled(!isItemEnabled);
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

  const handleInput = value => setPaletteName(value);

  // placeholder, todo: refactor
  const handleSubmit = () => {
    const options = {paletteName, colors};
    if (paletteName && colors.length >= 3) {
      navigation.navigate('Home', options);
    } else if (!paletteName) {
      Alert.alert('Error', 'Please enter a palette name.', <Text>OK</Text>);
    } else if (paletteName && colors.length < 3) {
      Alert.alert(
        'Error',
        'Please select at least three colours.',
        <Text>OK</Text>,
      );
    }
  };

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
            onChangeText={handleInput}
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
