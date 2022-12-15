import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatPage from '../screens/ChatPage';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatPage" component={ChatPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
