import React, {useState, useCallback} from 'react';
import {FlatList, Switch, Text, TextInput, View} from 'react-native';

import {COLORS} from '../../colors';
import {Button, PreviewBox} from '../../components';
import {alert} from '../../utils';

import styles from './add-color-palette-form.styles';

const ColorToggle = ({item, colors, setColors}) => {
  const [isItemEnabled, setIsItemEnabled] = useState(false);
  const {colorName, hexCode} = item;

  const handleChange = useCallback(() => {
    if (isItemEnabled) {
      const newColors = colors.filter(color => color !== item);
      setColors(newColors);
      setIsItemEnabled(false);
    } else {
      setColors([...colors, item]);
      setIsItemEnabled(true);
    }
  }, [colors, isItemEnabled, item, setColors]);

  return (
    <View style={styles.colorToggleContainer}>
      <View style={styles.colorContainer}>
        <PreviewBox style={styles.colorPreview} color={hexCode} />
        <Text style={styles.colorName}>{colorName}</Text>
      </View>
      <Switch value={isItemEnabled} onChange={handleChange} />
    </View>
  );
};

export const AddColorPaletteForm = ({navigation}) => {
  const [paletteName, setPaletteName] = useState('');
  const [colors, setColors] = useState([]);

  const handleSubmit = useCallback(() => {
    const MINIMUM_COLORS = 5;
    const options = {newPalette: {paletteName, colors}};

    if (!paletteName) {
      alert('Please enter a palette name.');
    } else if (paletteName && colors.length < MINIMUM_COLORS) {
      alert(`Please select at least ${MINIMUM_COLORS} colours.`);
    } else {
      navigation.navigate('Home', options);
    }
  }, [colors, navigation, paletteName]);

  return (
    <View style={styles.container}>
      <FlatList
        data={COLORS.filter(color => color.isShown)}
        keyExtractor={({colorName}) => colorName}
        renderItem={({item}) => (
          <ColorToggle item={item} colors={colors} setColors={setColors} />
        )}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.formLabel}>New palette name:</Text>
            <TextInput
              style={styles.paletteNameInput}
              value={paletteName}
              placeholder="Palette Name"
              onChangeText={setPaletteName}
            />
            <Text style={styles.formLabel}>
              Select 5 or more palette colours:
            </Text>
          </>
        )}
        ListFooterComponent={() => (
          <Button
            style={styles.submitButton}
            type="primary"
            onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </Button>
        )}
      />
    </View>
  );
};
