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
  const {xid} = route.params;
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState('');

  const userId = auth().currentUser.uid;
  const token = users[0]?.token;

  console.log('.............................>>', users[0]?.token, xid);

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

  useEffect(() => {
    GetUser();
  }, []);

  const GetUser = () => {
    firestore()
      .collection('AuthUser')
      .onSnapshot(snapshot => {
        let arr = [];
        snapshot.forEach(user => {
          arr.push(user.data());
        });
        setUsers(arr);
      });
  };

  {
    console.log('Messages----->>>>', messages);
  }
  const onSend = messageArray => {
    console.log('receiverId====>>>>>', xid);
    console.log('Mesages------<<<<>>>>>', msg);
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

  // let params = {
  //   to: token,
  //   content_available: true,
  //   priority: 0,
  //   notification: {
  //     title: msg.text,
  //     text: msg.text,
  //     badge: 1,
  //     sound: 'default',
  //     color: 'green',
  //     content_available: true,
  //     subtitle: 'Hello subTitle',
  //     show_in_foreground: true,
  //     show_in_background: true,
  //   },
  //   data: {
  //     title: msg.text,
  //     text: msg.text,
  //     customId: '123456789',
  //     alert: 'notification',
  //     subtitle: '',
  //     sound: 'default',
  //     color: 'red',
  //     content_available: false,
  //     priority: 0,
  //     vibrate: 500,
  //     show_in_foreground: true,
  //     show_in_background: false,
  //   },
  // };

  // axios
  //   .post('https://fcm.googleapis.com/fcm/send', params, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'key=AAAA_ESd9Rs:APA91bEdKPFLRKCENOjjcyEhKlIz6lBIjnJxzr-BD1FG9cRUWQqDqcJdKygIjf9d5XaRjlvZrITZnuZMAn2j78HcNlrRgq9BsKTVvN49tyFR3--Mo7OSOi3C2tdtT-e1u6pIS43Kuxj2',
  //     },
  //   })
  //   .then(data => {
  //     console.log('[data ---->>>> ]', data);
  //   })
  //   .catch(error => {
  //     console.log('[error ---->>>>]', error);
  //   });

  return (
    <Container>
      {/* <ShortModal /> */}
      <Header
        // title={name}
        desc={'online'}
        onBack={() => navigation.goBack()}
        phone={true}
        video={true}
        onPhone={() => {
          console.log('Phone is Pressed');
        }}
        onVideo={() => {
          navigation.navigate('VideoCalling');
        }}
      />
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
