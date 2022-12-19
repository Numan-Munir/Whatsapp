import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';
import {MaterialIndicator} from 'react-native-indicators';
import {StyleSheet} from 'react-native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
const LogoContainer = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.green,
  borderRadius: 20,
  height: '12%',
  width: '20%',
  padding: 8,
});
const WhatsappIcon = styled.Image({
  height: '83%',
  width: '80%',
});
const WhatsappText = styled.Text({
  color: theme.colors.black,
  fontFamily: theme.fontFamilies.semibold,
  fontSize: theme.fontSize.xTitle,
  marginTop: 10,
});
const LoaderContainer = styled.View({});
const LoaderBG = styled.View({});
const Loading = styled.Text({
  fontSize: theme.fontSize.mediumTitle,
  fontFamily: theme.fontFamilies.bold,
  color: theme.colors.green,
});

const ThirdSplash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WellcomeScreen');
    }, 2000);
  }, []);

  return (
    <Container>
      <LogoContainer>
        <WhatsappIcon
          source={require('../../assets/icons/whatsapp_icon.png')}
        />
      </LogoContainer>
      <WhatsappText>WhatsApp</WhatsappText>
      <LoaderContainer style={styles.loaderContainer}>
        <LoaderBG style={styles.loaderBG}>
          <MaterialIndicator color={theme.colors.green} />
        </LoaderBG>
        <Loading>Loading...</Loading>
      </LoaderContainer>
    </Container>
  );
};

export default ThirdSplash;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '-35%',
    paddingVertical: 50,
  },
  loaderBG: {
    height: '17%',
    width: '22%',
    borderRadius: 25,
  },
});
