import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Contacts from 'react-native-contacts';
import RoundBtn from '../../components/RoundBtn';
import styled from 'styled-components/native';
import {theme} from '../../ui';
import {PermissionsAndroid} from 'react-native';
import NumberCard from '../../components/NumberCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import ChatScreenModal from '../../components/ChatScreenModal';
import firestore from '@react-native-firebase/firestore';

const Container = styled.View({
  flex: 1,
});
const Modal = styled.Modal({
  backgroundColor: theme.colors.white,
});

const ChatScreen = ({navigation}) => {
  const [data, setData] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState([]);
  const [AuthData, setAuthData] = useState();

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        {
          title: 'Cool Photo App Contacts Permission',
          message:
            'Cool Photo App needs access to your Contacts ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Contacts');

        Contacts.getAll()
          .then(contacts => {
            // work with contacts
            console.log(
              '----------->>>>>>>',
              JSON.stringify(contacts.slice(0, 5)),
            );
            setData(contacts);
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log('Contacts permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const userData = () => {
    let arr = [];
    firestore()
      .collection('AuthUser')
      .onSnapshot(documentSnapshot => {
        documentSnapshot.forEach(x => {
          arr.push({...x.data()});
        });
        setAuthData(arr);
        console.log('Length of data', arr.length);
      });
  };

  useEffect(() => {
    requestCameraPermission();
    userData();
    getData();
  }, []);

  const selectNewNumber = async items => {
    setModalVisible(!modalVisible);
    if (list.length === 0) {
      list.push(items);
      await AsyncStorage.setItem('finalData', JSON.stringify(list));
      setList(list);
    } else {
      let filterItem = list.filter(e => e.displayName === items.displayName);
      if (filterItem.length === 0) {
        list.push(items);
        await AsyncStorage.setItem('finalData', JSON.stringify(list));
        setList(list);
      }
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('finalData');
      if (value !== null) {
        setList(JSON.parse(value));
        console.log('value is stored------------->>>>', JSON.parse(value));
      }
    } catch (e) {
      console.log('error of get----------->>>>', e);
    }
  };

  const handlePress = item => {
    navigation.navigate('GifftedScreen', {
      xid: item.uid,
    });
  };
  return (
    <>
      {!modalVisible ? (
        <Container>
          <FlatList
            data={AuthData}
            renderItem={({item}) => {
              return (
                <NumberCard
                  onPress={() => {
                    handlePress(item);
                  }}
                  title={item.data}
                />
              );
            }}
          />
          <RoundBtn onPress={() => setModalVisible(true)} />
        </Container>
      ) : (
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <Header
            length={data.length}
            onBack={() => {
              navigation.goBack();
              setModalVisible(false);
            }}
            title={'Whatsapp'}
            desc={'contacts'}
          />
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <NumberCard
                  title={item.displayName}
                  number={item.phoneNumbers[0]?.number}
                  onPress={() => {
                    selectNewNumber();
                  }}
                />
              );
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default ChatScreen;
