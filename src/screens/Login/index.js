import {Keyboard, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';
import {Spacer} from '../../components/Spacer';
import PrimaryButton from '../../components/PrimaryButton';
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/auth';
import {MaterialIndicator} from 'react-native-indicators';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: theme.space[9],
  paddingTop: 50,
});

const TitleContainer = styled.View({
  flexDirection: 'row',
});

const MenuImage = styled.Image({
  right: -20,
});

const Menu = styled.TouchableOpacity({});
const Title = styled.Text({
  fontFamily: theme.fontFamilies.semibold,
  fontSize: theme.fontSize.smallTitle,
});

const Description = styled.Text({
  textAlign: 'center',
  fontSize: theme.fontSize.small,
});

const MyNumber = styled.Text({
  textAlign: 'center',
  fontSize: theme.fontSize.small,
  color: theme.colors.blue,
});
const LoaderContainer = styled.View({});
const LoaderBG = styled.View({});

const Login = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState('');

  async function signInWithPhoneNumber() {
    Keyboard.dismiss();
    const confirmation = await auth().signInWithPhoneNumber(data);
    console.log('Confirmation------>>>>>', confirmation);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigation.navigate('OtpScreen', {
        data: data,
        confirm: confirmation,
      });
    }, 3000);
  }

  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Enter your phone number</Title>
          <Menu>
            <MenuImage source={require('../../assets/icons/menu_icon.png')} />
          </Menu>
        </TitleContainer>
        <Spacer.Column numberOfSpaces={8} />
        <Description>
          WhatsApp will need to verify your phone number.
          <MyNumber> What’s my number?</MyNumber>
        </Description>
        <Spacer.Column numberOfSpaces={16} />
        <PhoneInput defaultCode="PK" onChangeFormattedText={x => setData(x)} />
        <PrimaryButton
          title={'NEXT'}
          style={styles.nextBtn}
          onPress={() => signInWithPhoneNumber()}
        />
      </Container>
      {loader && (
        <LoaderContainer style={styles.loaderContainer}>
          <LoaderBG style={styles.loaderBG}>
            <MaterialIndicator color={theme.colors.green} />
          </LoaderBG>
        </LoaderContainer>
      )}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  nextBtn: {
    width: 60,
    position: 'absolute',
    bottom: '10%',
  },
  loaderContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingVertical: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loaderBG: {
    height: '17%',
    width: '22%',
    backgroundColor: theme.colors.white,
    borderRadius: 25,
  },
});
