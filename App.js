import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Main } from './src/Main';
import { FullPhoto } from './src/FullPhoto';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="FullPhoto" component={FullPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
