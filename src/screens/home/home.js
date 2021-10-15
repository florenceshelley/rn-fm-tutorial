import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './home.styles';

export const Home = ({navigation}) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Text
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}>
        Solarized
      </Text>
    </TouchableOpacity>
  </View>
);
