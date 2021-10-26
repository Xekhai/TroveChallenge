import React from 'react';

import Init from './src/init'
import Login from './src/login'
import Signup from './src/signup'
import Home from './src/home'
import Portfolio from './src/portf'
import AvStocks from './src/avStocks'
import Settings from './src/settings'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Init" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Portfolio" component={Portfolio} />
      <Stack.Screen name="AvStocks" component={AvStocks} />
      <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
         )
}