import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import Box from './box';
import {styles} from './app.styles';

const colors = {
  cyan: '#2aa198',
  blue: '#268bd2',
  magenta: '#d33682',
  orange: '#cb4b16',
};

const App = () => (
  <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Here are some boxes of different colours
      </Text>
      {Object.entries(colors).map(color => (
        <Box color={color} key={color[0]} />
      ))}
    </View>
  </SafeAreaView>
);

export default App;
