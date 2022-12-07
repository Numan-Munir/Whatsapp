import React from 'react';
import { theme } from '../../ui';
import styled from 'styled-components/native';
import Background from '../../components/Background'

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
const Title = styled.Text({
  fontWeight: 'bold',
  fontSize: 30,
  color: 'black',
  fontFamily: theme.fontFamilies.bold
});

const SplashScreen = () => {
  return (
    <Background></Background>
    
  );
};

export default SplashScreen;

