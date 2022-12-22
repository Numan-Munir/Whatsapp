import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatPage from '../screens/ChatPage';
import GifftedScreen from '../screens/GifftedScreen';
import VideoCalling from '../screens/VideoCalling';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatPage" component={ChatPage} />
      <Stack.Screen name="GifftedScreen" component={GifftedScreen} />
      <Stack.Screen name="VideoCalling" component={VideoCalling} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
