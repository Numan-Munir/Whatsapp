import React from 'react';
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
const VectorImageOne = styled.ImageBackground({
  height: 204,
  width: 106,
  position: 'absolute',
  left: 0,
  bottom: 0,
});
const VectorImageTwo = styled.ImageBackground({
  height: 140,
  width: 50,
  position: 'absolute',
  left: 0,
  top: '8%',
});
const VectorImageThree = styled.ImageBackground({
  height: 35,
  width: 40,
  position: 'absolute',
  left: '10%',
  top: '40%',
});
const VectorImageFour = styled.ImageBackground({
  height: 42,
  width: 41,
  position: 'absolute',
  right: '10%',
  bottom: '32%',
});
const VectorImageFive = styled.ImageBackground({
  height: 78,
  width: 40,
  position: 'absolute',
  right: '0%',
  top: '25%',
});
const LogoContainerSec = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.green,
  borderRadius: 20,
  height: '12%',
  width: '20%',
  padding: 10,
});
const WhatsappIconSec = styled.Image({
  height: '80%',
  width: '80%',
});
const WhatsappText = styled.Text({
  color: theme.colors.black,
  fontFamily: theme.fontFamilies.semibold,
  fontSize: theme.fontSize.xTitle,
});

const Background = ({Logo, Facebook}) => {
  return (
    <Container>
      <VectorImageOne source={require('../../assets/images/Vector1.png')} />
      <VectorImageTwo source={require('../../assets/images/Vector2.png')} />
      <VectorImageThree source={require('../../assets/images/Vector3.png')} />
      <VectorImageFour source={require('../../assets/images/Vector4.png')} />
      <VectorImageFive source={require('../../assets/images/Vector5.png')} />
      {Logo && (
        <LogoContainer>
          <WhatsappIcon
            source={require('../../assets/icons/whatsapp_icon.png')}
          />
        </LogoContainer>
      )}

      {Facebook && (
        <LogoContainerSec>
          <WhatsappIconSec
            source={require('../../assets/icons/whatsapp_icon.png')}
          />
        </LogoContainerSec>
      )}
    </Container>
  );
};

export default Background;
