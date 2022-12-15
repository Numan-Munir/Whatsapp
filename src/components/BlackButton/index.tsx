import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

interface props {
  title?: string;
  style?: any;
  onPress?: void;
}

const Container = styled.TouchableOpacity({
  backgroundColor: theme.colors.black,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: 16,
  borderRadius: 50,
});
const Title = styled.Text({
  fontFamily: theme.fontFamilies.semibold,
  fontSize: theme.fontSize.xmediumText,
  color: theme.colors.white,
});

const BlackButton = ({title, style, onPress}) => {
  return (
    <Container style={style} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default BlackButton;

const styles = StyleSheet.create({});
