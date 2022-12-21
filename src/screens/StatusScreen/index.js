import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const StatusScreen = () => {
  return (
    <View>
      <Text>StatusScreen</Text>
      <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
        style={styles.LogoutText}>
        <Text style={styles.SmallText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  LogoutText: {
    height: 50,
    width: 80,
    backgroundColor: 'orange',
    marginTop: '70%',
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  SmallText: {fontSize: 14, fontWeight: '500'},
});
