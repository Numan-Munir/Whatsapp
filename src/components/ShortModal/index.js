import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

const Main = styled.View({
  height: '30%',
  width: '40%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 10,
  //   backgroundColor: 'red',
});
const Container = styled.Modal({});
const TitleView = styled.View({});
const Title = styled.Text({
  color: theme.colors.black,
});

const ShortModal = () => {
  return (
    <Main>
      <Container>
        <TitleView>
          <Title>View contact</Title>
        </TitleView>
        <TitleView>
          <Title>Media, links, and docs</Title>
        </TitleView>
        <TitleView>
          <Title>Search</Title>
        </TitleView>
        <TitleView>
          <Title>Mute notifications</Title>
        </TitleView>
        <TitleView>
          <Title>Wallpaper</Title>
        </TitleView>
        <TitleView>
          <Title>More</Title>
        </TitleView>
      </Container>
    </Main>
  );
};

export default ShortModal;

const styles = StyleSheet.create({});
