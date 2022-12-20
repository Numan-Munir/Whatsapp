import React from 'react';
import styled from 'styled-components/native';
import {theme} from 'src/ui';

const Container = styled.Modal({
  height: '20%',
  width: '20%',
  backgroundColor: 'red',
});
const ChatScreenModal = () => {
  return <Container></Container>;
};

export default ChatScreenModal;
