import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Header from '../../components/Header';
import styled from 'styled-components/native';
import {theme} from '../../ui';
import axios from 'axios';

const Container = styled.View({
  flex: 1,
});

const GifftedScreen = ({navigation, route}) => {
  const {xid, name} = route.params;
  console.log('Name is here---=-=-==--=>>>>', name, xid);

  const userId = auth().currentUser.uid;

  const [messages, setMessages] = useState([]);
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

  {
    console.log('Messages----->>>>', messages);
  }
  const onSend = messageArray => {
    console.log('receiverId====>>>>>', xid);
    const msg = messageArray[0];
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

  let params = {
    to: token,
    content_available: true,
    priority: 0,
    notification: {
        title: msg.text,
        text: msg.text,
        badge: 1,
        sound: 'default',
        color: 'green',
        content_available: true,
        subtitle: 'Hello subTitle',
        show_in_foreground: true,
        show_in_background: true,
    },
    data: {
        title: msg.text,
        text: msg.text,
        customId: '123456789',
        alert: 'notification',
        subtitle: '',
        sound: 'default',
        color: 'red',
        content_available: false,
        priority: 0,
        vibrate: 500,
        show_in_foreground: true,
        show_in_background: false,
    },
};

axios
    .post('https://fcm.googleapis.com/fcm/send', params, {
        headers: {
            'Content-Type': 'application/json',
            Authorization:
                'AAAAW93vU3o:APA91bGCMgLV5oLLT4ET5RTFduvr35_5XDngldXlJ9XUrVP1G_jmjNWZz_RCMGLu50_x6rEWpEFYiIIIsTMnEuGNQXzL3vGQho-AyT2BZSqfzNlnGy4v4IpEBpAVoRn652NDuAEaZMDz',
        },
    })
    .then(data => {
        console.log('[data ---->>>> ]', data);
    })
    .catch(error => {
        console.log('[error ---->>>>]', error);
    });
};

  return (
    <Container>
      <Header title={name} desc={'online'} onBack={() => navigation.goBack()} />
      <GiftedChat
        messages={messages}
        placeholder="Type here"
        onSend={messages => onSend(messages)}
        user={{
          _id: userId,
        }}
      />
    </Container>
  );
};

export default GifftedScreen;

const styles = StyleSheet.create({});