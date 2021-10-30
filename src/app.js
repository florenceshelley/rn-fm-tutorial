import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ColorPalette, ColorPaletteModal, Home} from './screens';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({route: {params}}) => ({
          headerTitle: 'Palette Picker',
          ...(!!params
            ? {
                newPalette: {
                  paletteName: params.paletteName,
                  colors: params.colors,
                },
              }
            : {}),
        })}
      />
      <Stack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({route: {params}}) => ({
          headerBackTitle: '',
          headerTitle: params.paletteName,
        })}
      />
      <Stack.Screen
        name="ColorPaletteModal"
        component={ColorPaletteModal}
        options={{headerLeft: null, presentation: 'modal'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
