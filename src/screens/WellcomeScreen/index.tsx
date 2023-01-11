import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';
import PrimaryButton from '../../components/PrimaryButton';
import {Spacer} from '../../components/Spacer';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../../routes/StackNavigation';

const MainContainer = styled.ScrollView({
  flex: 1,
  paddingTop: '15%',
});

const HeaderContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
});

const WellcomeImage = styled.Image({
  height: 250,
  width: 250,
});

const Title = styled.Text({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSize.title,
});

const Discreption = styled.Text({
  fontSize: theme.fontSize.small,
  textAlign: 'center',
});

const CompanyName = styled.Text({
  fontFamily: theme.fontFamilies.light,
  fontSize: theme.fontSize.text,
  color: theme.colors.black,
});

const FromText = styled.Text({
  fontFamily: theme.fontFamilies.light,
  fontSize: theme.fontSize.small,
  color: theme.colors.black10,
});

const BottomContainer = styled.View({
  // flex: 1,
  alignItems: 'center',
  paddingHorizontal: 57,
});

const CompanyContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20%',
});

const PrivacyBtn = styled.Text({
  color: theme.colors.blue,
});
const ConditionBtn = styled.Text({
  color: theme.colors.blue,
});

type Props = NativeStackScreenProps<StackNav>;

const WellcomeScreen: React.FC<Props> = ({navigation}) => {
  // const navigation = useNavigation<NativeStackNavigationProp<StackNav>>();

  return (
    <MainContainer>
      <HeaderContainer>
        <Title>Welcome to WhatsApp</Title>
        <Spacer.Column numberOfSpaces={10} />
        <WellcomeImage
          source={require('../../assets/images/wellcome_image.png')}
        />
      </HeaderContainer>
      <Spacer.Column numberOfSpaces={14} />

      <BottomContainer>
        <Discreption numberOfLines={2}>
          Read our <PrivacyBtn>Privacy Policy</PrivacyBtn>. Tap “Agree and
          continue” to accept the{' '}
          <ConditionBtn>Term of Condition </ConditionBtn>
        </Discreption>
        <Spacer.Column numberOfSpaces={10} />
        <PrimaryButton
          title="AGREE AND CONTINUE"
          onPress={() => navigation.navigate('Login')}
          style
        />
        <CompanyContainer>
          <FromText>from</FromText>
          <CompanyName>Facebook</CompanyName>
        </CompanyContainer>
      </BottomContainer>
      <Spacer.Column numberOfSpaces={15} />
    </MainContainer>
  );
};

export default WellcomeScreen;
