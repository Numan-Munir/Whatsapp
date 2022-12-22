import {Keyboard, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';
import {Spacer} from '../../components/Spacer';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BlackButton from '../../components/BlackButton';
import InvalidAlert from '../../components/InvalidAlert';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {MaterialIndicator} from 'react-native-indicators';
import messaging from '@react-native-firebase/messaging';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: theme.space[6],
});
const HeaderContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  top: '6%',
  left: 24,
});
const Touch = styled.TouchableOpacity({});
const BackIcon = styled.Image({});
const HeaderTitle = styled.Text({
  flex: 1,
  fontSize: theme.fontSize.mediumTitle,
  fontFamily: theme.fontFamilies.semibold,
  color: theme.colors.black,
});
const BottomContainer = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
});

const NumberText = styled.Text({
  fontFamily: theme.fontFamilies.text,
});
const LoaderContainer = styled.View({});
const LoaderBG = styled.View({});

const CELL_COUNT = 6;

const OtpScreen = ({navigation, route}) => {
  const {data, confirm} = route.params;
  const [loader, setLoader] = useState(false);
  const [code, setCode] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [changeData, setChangeData] = useState(false);
  console.log('Datta======>>>>>>>', data, confirm, code);
  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });

  async function confirmCode() {
    try {
      await confirm.confirm(code).then(async response => {
        console.log('[response ---->>>> ]', response);
        const token = await messaging().getToken();
        console.log('[response ---->>>> ]', token);

        firestore()
          .collection('AuthUser')
          .add({token, data, uid: auth()?.currentUser?.uid})
          .then(
            navigation.navigate('ChatPage', {
              token,
              data: data,
            }),
          );
        console.log(
          '[responseDaat fireStore ---->>>> ]',
          (uid = auth()?.currentUser?.uid),
          data,
          token,
        );
      });
      console.log('Data=====----->>', code, confirm);
    } catch (error) {
      console.log('Invalid code....', error);
      setInvalid(true);
    }
  }

  const dataChange = () => {
    Keyboard.dismiss();
    confirmCode();
    setChangeData(!changeData);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <Touch onPress={() => navigation.goBack()}>
            <BackIcon source={require('../../assets/icons/back_icon.png')} />
          </Touch>
          <Spacer.Row numberOfSpaces={4} />
          <HeaderTitle>Enter OTP Code</HeaderTitle>
        </HeaderContainer>
        <BottomContainer>
          <NumberText>Code has been send to {data}</NumberText>
          <Spacer.Column numberOfSpaces={14} />
          <CodeField
            ref={ref}
            {...props}
            value={code}
            onChangeText={setCode}
            textInputStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Spacer.Column numberOfSpaces={6} />
          {invalid && <InvalidAlert />}
        </BottomContainer>
        <BlackButton
          title={'Verify'}
          style={styles.Btn}
          onPress={() => dataChange()}
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
export default OtpScreen;

const styles = StyleSheet.create({
  codeFieldRoot: {},
  root: {flex: 1, padding: 20},
  title: {fontSize: 40},
  cell: {
    width: 40,
    height: 40,
    fontSize: 24,
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: 10,
    textAlign: 'center',
    paddingTop: 3,
    marginHorizontal: theme.space[2],
  },
  focusCell: {
    borderColor: '#000',
  },
  Btn: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
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
