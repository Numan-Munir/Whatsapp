import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const GiftedChatScreen = ({navigation, route}) => {
  const {xid, name} = route.params;
  const [messages, setMessages] = useState([]);
  const userId = auth().currentUser.uid;
  console.log('userID ----->>>>', userId);

  useEffect(() => {
    const docid = xid > userId ? userId + '-' + xid : xid + '-' + userId;
    const messageRef = firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', 'desc');

    messageRef.onSnapshot(querySnap => {
      const allmsg = querySnap.docs.map(docSnap => {
        const data = docSnap.data();
        if (data.createdAt) {
          return {
            ...docSnap.data(),
            createdAt: docSnap.data().createdAt.toDate(),
          };
        } else {
          return {
            ...docSnap.data(),
            createdAt: new Date(),
          };
        }
      });
      setMessages(allmsg);
    });
  }, []);

  const onSend = messageArray => {
    const msg = messageArray[0];
    console.log('receiverId====>>>>>', xid);
    const mymsg = {
      ...msg,
      sentBy: userId,
      sentTo: xid,
      createdAt: new Date(),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
    const docid = xid > userId ? userId + '-' + xid : xid + '-' + userId;

    firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .add({...mymsg, createdAt: firestore.FieldValue.serverTimestamp()});
  };

  return (
    <GiftedChat
      messages={messages}
      placeholder="Type here"
      onSend={messages => onSend(messages)}
      user={{
        _id: userId,
      }}
    />
  );
};

export default GiftedChatScreen;

const styles = StyleSheet.create({});
