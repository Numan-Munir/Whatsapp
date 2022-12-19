import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatPage from '../screens/ChatPage';
import GiftedChatScreen from '../screens/GiftedChatScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatPage" component={ChatPage} />
      <Stack.Screen name="GiftedChatScreen" component={GiftedChatScreen} />
      <Stack.Screen name="ChatPage" component={ChatPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
