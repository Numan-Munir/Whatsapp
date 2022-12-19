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
  borderRadius: 30,
  height: '18%',
  width: '30%',
  padding: 20,
});
const WhatsappIcon = styled.Image({
  height: '100%',
  width: '94%',
});

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SecondSplash');
    }, 2000);
  }, []);

  return (
    <Container>
      <LogoContainer>
        <WhatsappIcon
          source={require('../../assets/icons/whatsapp_icon.png')}
        />
      </LogoContainer>
    </Container>
  );
};

export default SplashScreen;
