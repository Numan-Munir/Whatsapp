import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';
import {Spacer} from '../../components/Spacer';
import PrimaryButton from '../../components/PrimaryButton';
import PhoneInput from 'react-native-phone-number-input';

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

// const InputView = styled.View({
//   width: '100%',
//   alignItems: 'center',
//   paddingHorizontal: theme.space[8],
// });

// const CountryView = styled.View({
//   width: '100%',
//   paddingVertical: 5,
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderBottomWidth: 0.5,
//   borderBottomColor: theme.colors.primery100,
// });

// const CountryName = styled.TextInput({
//   fontSize: theme.fontSize.mediumText,
//   fontFamily: theme.fontFamilies.text,
// });

// const DownIcon = styled.Image({
//   position: 'absolute',
//   right: 10,
// });

// const NumberView = styled.View({
//   width: '100%',
//   flexDirection: 'row',
// });

// const CountryCode = styled.TextInput({
//   fontSize: theme.fontSize.mediumText,
//   fontFamily: theme.fontFamilies.text,
//   borderBottomWidth: 1,
//   borderBottomColor: theme.colors.primery100,
//   paddingVertical: 3,
//   letterSpacing: 1.5,
//   marginTop: 5,
//   width: '18%',
// });

// const Number = styled.TextInput({
//   fontSize: theme.fontSize.mediumText,
//   fontFamily: theme.fontFamilies.text,
//   borderBottomWidth: 1,
//   borderBottomColor: theme.colors.primery100,
//   paddingVertical: 3,
//   marginTop: 5,
//   marginLeft: '5%',
//   width: '77%',
// });

const Login = () => {
  const [country, setCountry] = useState('Pakistan');
  const [countryCode, setCountryCode] = useState('+ 92');
  const [number, setNumber] = useState('');
  const [data, setData] = useState();

  return (
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
      <PhoneInput
        style={{color: 'red'}}
        onChangeFormattedText={(x: any) => setData(x)}
      />
      {/* <InputView>
        <CountryView>
          <CountryName
            value={country}
            onChangeText={text => setCountry(text)}
          />
          <DownIcon source={require('../../assets/icons/down_icon.png')} />
        </CountryView>

        <NumberView>
          <CountryCode
            value={countryCode}
            onChangeText={text => setCountryCode(text)}
            keyboardType="decimal-pad"
          />
          <Number
            value={number}
            onChangeText={text => setNumber(text)}
            keyboardType="decimal-pad"
          />
        </NumberView>
      </InputView> */}
      <PrimaryButton title={'NEXT'} style={styles.nextBtn} />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  nextBtn: {
    width: 60,
    position: 'absolute',
    bottom: '10%',
  },
});
