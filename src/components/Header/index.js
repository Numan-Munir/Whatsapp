import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

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
const PhoneIcon = styled.Image({
  marginRight: 20,
  height: 24,
  width: 17,
});
const VideoIcon = styled.Image({
  marginRight: 20,
  height: 22,
  width: 22,
});
const MenuView = styled.TouchableOpacity({});
const MenuIcon = styled.Image({
  height: 20,
});

const Header = ({
  length,
  onMenuPress,
  onSearchPress,
  onBack,
  title,
  desc,
  search,
  video,
  phone,
  onVideo,
  onPhone,
}) => {
  return (
    <HeaderContainer>
      <TitleView>
        <BackView onPress={onBack}>
          <BackImage source={require('../../assets/icons/back_icon.png')} />
        </BackView>
        <HeaderTitleView>
          <HeaderTitle>{title}</HeaderTitle>
          <NumberOfContact>
            {length} {desc}
          </NumberOfContact>
        </HeaderTitleView>
      </TitleView>

      <IconView>
        {search && (
          <SearchView onPress={onSearchPress}>
            <SearchIcon
              source={require('../../assets/icons/search_icon.png')}
            />
          </SearchView>
        )}
        {video && (
          <SearchView onPress={onVideo}>
            <VideoIcon source={require('../../assets/icons/video.png')} />
          </SearchView>
        )}
        {phone && (
          <SearchView onPress={onPhone}>
            <PhoneIcon source={require('../../assets/icons/phone.png')} />
          </SearchView>
        )}
        <MenuView onPress={onMenuPress}>
          <MenuIcon source={require('../../assets/icons/dot_icon.png')} />
        </MenuView>
      </IconView>
    </HeaderContainer>
  );
};

export default Header;

const styles = StyleSheet.create({});
