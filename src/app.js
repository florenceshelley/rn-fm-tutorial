import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ColorPaletteModal, MainStackScreen} from './screens';

const RootStack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen
        name="MainStack"
        component={MainStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ColorPaletteModal"
        component={ColorPaletteModal}
        options={{headerLeft: null, presentation: 'modal'}}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
