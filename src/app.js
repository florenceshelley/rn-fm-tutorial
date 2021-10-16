import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, ColorPalette} from './screens';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'Palette Picker'}}
      />
      <Stack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({route: {params}}) => {
          const {paletteName} = params;
          return {
            headerBackTitle: '',
            headerTitle: paletteName,
          };
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
