import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

interface props {
  onPress?: () => void;
  title?: string;
  style?: any;
}

const Container = styled.TouchableOpacity({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.space[1],
  paddingVertical: theme.space[3],
  backgroundColor: theme.colors.primery100,
});
const Title = styled.Text({
  fontFamily: theme.fontFamilies.text,
  fontSize: theme.fontSize.xsmall,
});

const PrimaryButton: React.FC<props> = ({onPress, title, style}) => {
  return (
    <Container onPress={onPress} style={style}>
      <Title>{title}</Title>
    </Container>
  );
};

export default PrimaryButton;
