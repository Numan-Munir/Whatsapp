import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import WellcomeScreen from '../screens/WellcomeScreen';
import OtpScreen from '../screens/OtpScreen';
import ChatPage from '../screens/ChatPage';
import SecondSplash from '../screens/SecondSplash';
import ThirdSplash from '../screens/ThirdSplash';
import GifftedScreen from '../screens/GifftedScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="WellcomeScreen" component={WellcomeScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ChatPage" component={ChatPage} />
      <Stack.Screen name="SecondSplash" component={SecondSplash} />
      <Stack.Screen name="ThirdSplash" component={ThirdSplash} />
      <Stack.Screen name="GifftedScreen" component={GifftedScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
