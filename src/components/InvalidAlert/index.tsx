import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

const Container = styled.View({
  backgroundColor: theme.colors.red10,
  width: '100%',
  borderRadius: 25,
  paddingHorizontal: 10,
  paddingVertical: 7,
  flexDirection: 'row',
  alignItems: 'center',
});
const InvalidText = styled.Text({
  color: theme.colors.red300,
  fontSize: theme.fontSize.mediumText,
  fontFamily: theme.fontFamilies.text,
});
const IconContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.red300,
  height: 16,
  width: 16,
  borderRadius: 50,
  marginRight: 5,
});
const IconText = styled.Text({
  color: theme.colors.white,
  fontSize: 10,
});

const InvalidAlert = () => {
  return (
    <Container>
      <IconContainer>
        <IconText>!</IconText>
      </IconContainer>
      <InvalidText>Invalid password</InvalidText>
    </Container>
  );
};

export default InvalidAlert;

const styles = StyleSheet.create({});
