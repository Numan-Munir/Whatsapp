import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

const Container = styled.TouchableOpacity({
  height: 50,
  width: 50,
  backgroundColor: theme.colors.primery300,
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 70,
  right: 20,
  zIndex: 1000,
});
const ChatIcon = styled.Image({
  height: '40%',
  width: '50%',
});

const RoundBtn = ({onPress}) => {
  return (
    <Container onPress={onPress}>
      <ChatIcon source={require('../../assets/icons/chat_icon.png')} />
    </Container>
  );
};

export default RoundBtn;
