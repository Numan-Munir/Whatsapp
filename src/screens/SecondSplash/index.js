import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

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
const FBContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: '10%',
});

const FromText = styled.Text({
  fontFamily: theme.fontFamilies.text,
  color: theme.colors.gray,
  fontSize: theme.fontSize.xsmall,
});
const FBText = styled.Text({
  fontFamily: theme.fontFamilies.text,
  letterSpacing: 1,
  color: theme.colors.black,
});

const SecondSplash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ThirdSplash');
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
      <FBContainer>
        <FromText>from</FromText>
        <FBText>FACEBOOK</FBText>
      </FBContainer>
    </Container>
  );
};

export default SecondSplash;
