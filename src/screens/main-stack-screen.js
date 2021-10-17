import 'react-native-gesture-handler';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, ColorPalette} from './';

const MainStack = createStackNavigator();

export const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{headerTitle: 'Palette Picker'}}
    />
    <MainStack.Screen
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
  </MainStack.Navigator>
);
