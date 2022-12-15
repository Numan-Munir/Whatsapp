import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

const Container = styled.TouchableOpacity({
  width: '100%',
  flexDirection: 'row',
  paddingHorizontal: 21,
  paddingVertical: 15,
});

const TitleContainer = styled.View({
  marginLeft: 15,
});
const Title = styled.Text({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSize.xText,
});
const ProfileImage = styled.Image({
  height: 50,
  width: 50,
  borderRadius: 50,
});
const Number = styled.Text({
  fontFamily: theme.fontFamilies.text,
  fontSize: theme.fontSize.small,
  marginTop: 7,
});

const NumberCard = ({title, number}) => {
  return (
    <Container>
      <ProfileImage source={{uri: 'https://picsum.photos/200'}} />
      <TitleContainer>
        <Title>{title}</Title>
        <Number>{number}</Number>
      </TitleContainer>
    </Container>
  );
};

export default NumberCard;

const styles = StyleSheet.create({});
