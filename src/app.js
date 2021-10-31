import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ColorPalette, AddColorPaletteModal, Home} from './screens';

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
          headerTintColor: '#000',
          headerBackTitleVisible: false,
          headerTitle: params.paletteName,
        })}
      />
      <Stack.Screen
        name="AddColorPaletteModal"
        component={AddColorPaletteModal}
        options={{
          headerLeft: null,
          headerTitle: 'Add New Palette',
          presentation: 'modal'
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
