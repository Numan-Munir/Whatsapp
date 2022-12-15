import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatPage = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>ChatPage</Text>
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({});
