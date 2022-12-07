import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui'

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
const LogoContainer = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.green,
  borderRadius: 50,
  padding: 25,
});
const WhatsappIcon = styled.Image({
  height: 94,
  width: 94,
});
const VectorImageOne = styled.Image({
  height: 204,
  width: 106,
  position: 'absolute',
  left: 0,
  bottom: 0,
  });
  const VectorImageTwo = styled.Image({
    height: 140,
    width: 50,
    position: 'absolute',
    left: 0,
    top: '8%',
    });
    const VectorImageThree = styled.Image({
      height: 35,
      width: 40,
      position: 'absolute',
      left: '10%',
      top: '40%'
      });
      const VectorImageFour = styled.Image({
        height: 42,
        width: 41,
        position: 'absolute',
        right: '10%',
        bottom: '32%'
        });
        const VectorImageFive = styled.Image({
          height: 78,
          width: 40,
          position: 'absolute',
          right: '0%',
          top: '25%'
          });
const Background = () => {
  return (
    <Container>
    <VectorImageOne source={require('../../assets/images/Vector1.png')}/>
    <VectorImageTwo source={require('../../assets/images/Vector2.png')}/>
    <VectorImageThree source={require('../../assets/images/Vector3.png')}/>
    <VectorImageFour source={require('../../assets/images/Vector4.png')}/>
    <VectorImageFive source={require('../../assets/images/Vector5.png')}/>
      <LogoContainer >
          <WhatsappIcon source={require('../../assets/icons/whatsapp_icon.png')}/>
      </LogoContainer>
      </Container>
  )
}

export default Background;