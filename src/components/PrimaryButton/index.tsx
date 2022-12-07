import React from 'react'
import styled from 'styled-components/native';
import {theme} from '../../ui'


interface props{
    onPress?: () => void;

}


const Container = styled.TouchableOpacity({
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.space[1],
    paddingVertical: theme.space[2],
    backgroundColor: theme.colors.primery100,
});
  const Title= styled.Text({
    fontFamily: theme.fontFamilies.text,
  });

const PrimaryButton = ({onPress}) => {

  return (
    <Container onPress={onPress}>
        <Title>AGREE AND CONTINUE</Title>
    </Container>
  )

}

export default PrimaryButton;
