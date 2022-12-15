import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../ChatScreen';
import StatusScreen from '../StatusScreen';
import CallsScreen from '../CallsScreen';
import styled from 'styled-components/native';
import {theme} from '../../ui';

const Container= styled.View({
  flex:1,
});
const HeaderContainer = styled.View({
  height: '10%',
  paddingHorizontal: 10,
  backgroundColor: theme.colors.primery300,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingBottom: 5
});
const TitleView = styled.View({});
const HeaderTitle = styled.Text({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSize.smallTitle,
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

const Tab = createMaterialTopTabNavigator();

const ChatPage = ({navigation}) => {
  return (
    <Container>
      <HeaderContainer>
        <TitleView>
          <HeaderTitle>Whatsapp</HeaderTitle>
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

      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarLabelStyle: {
            color: theme.colors.white,
            fontFamily: theme.fontFamilies.bold,
            // textTransform: 'uppercase',
          },
          tabBarStyle: {
            backgroundColor: theme.colors.primery300,
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.white,
            height: 2.5
          },
        }}>
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </Container>
  );
};
export default ChatPage;
