import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Contacts from 'react-native-contacts';
import RoundBtn from '../../components/RoundBtn';
import styled from 'styled-components/native';
import {theme} from '../../ui';
import {PermissionsAndroid} from 'react-native';
import NumberCard from '../../components/NumberCard';

const Container = styled.View({
  flex: 1,
});
const Modal = styled.Modal({
  backgroundColor: theme.colors.white,
});
const BackView = styled.TouchableOpacity({});
const BackImage = styled.Image({
  tintColor: theme.colors.white,
});
const HeaderTitleView = styled.View({
  marginLeft: 20,
});
const HeaderContainer = styled.View({
  height: '12%',
  paddingHorizontal: 10,
  backgroundColor: theme.colors.primery300,
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
});
const TitleView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});
const HeaderTitle = styled.Text({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSize.smallTitle,
  color: theme.colors.white,
});
const NumberOfContact = styled.Text({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSize.text,
  color: theme.colors.white,
});
const IconView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const SearchView = styled.TouchableOpacity({});
const SearchIcon = styled.Image({
  marginRight: 20,
  height: 20,
});
const MenuView = styled.TouchableOpacity({});
const MenuIcon = styled.Image({
  height: 20,
});

const ChatScreen = ({navigation}) => {
  const [data, setData] = useState();
  const [modalVisible, setModalVisible] = useState(false);

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

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <>
      {!modalVisible ? (
        <Container>
          <RoundBtn onPress={() => setModalVisible(true)} />
        </Container>
      ) : (
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <HeaderContainer>
            <TitleView>
              <BackView onPress={() => setModalVisible(false)}>
                <BackImage
                  source={require('../../assets/icons/back_icon.png')}
                />
              </BackView>
              <HeaderTitleView>
                <HeaderTitle>Whatsapp</HeaderTitle>
                <NumberOfContact>{data.length} conatcts</NumberOfContact>
              </HeaderTitleView>
            </TitleView>

            <IconView>
              <SearchView>
                <SearchIcon
                  source={require('../../assets/icons/search_icon.png')}
                />
              </SearchView>
              <MenuView>
                <MenuIcon source={require('../../assets/icons/dot_icon.png')} />
              </MenuView>
            </IconView>
          </HeaderContainer>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <NumberCard
                  title={item.displayName}
                  number={item.phoneNumbers[0]?.number}
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
