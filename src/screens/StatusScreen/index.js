import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const StatusScreen = () => {
  return (
    <View>
      <Text>StatusScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({});
