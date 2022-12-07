import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui'
import PrimaryButton from '../../components/PrimaryButton';
import { Alert } from 'react-native';



const Container = styled.View({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  });

  const WellcomeImage = styled.Image({
    height: 250,
    width: 250
  })
const WellcomeScreen = () => {
  return (
    <Container>
        <WellcomeImage source={require('../../assets/images/wellcome_image.png')}/>
        <PrimaryButton onPress={()=> Alert.alert('New Data')}/>
    </Container>
  )
}

export default WellcomeScreen;
