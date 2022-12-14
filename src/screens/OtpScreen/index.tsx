import {StyleSheet, Text, View} from 'react-native';
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

const CELL_COUNT = 4;

const OtpScreen = () => {
  const [value, setValue] = useState('');
  const [invalid, setInvalid] = useState(false);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Container>
      <HeaderContainer>
        <BackIcon source={require('../../assets/icons/back_icon.png')} />
        <Spacer.Row numberOfSpaces={4} />
        <HeaderTitle>Enter OTP Code</HeaderTitle>
      </HeaderContainer>
      <BottomContainer>
        <NumberText>Code has been send to +92 11******44</NumberText>
        <Spacer.Column numberOfSpaces={14} />
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          textInputStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
          cellCount={CELL_COUNT}
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
        <InvalidAlert />
      </BottomContainer>
      <BlackButton title={'Verify'} style={styles.Btn} />
    </Container>
  );
};
export default OtpScreen;

const styles = StyleSheet.create({
  codeFieldRoot: {},
  root: {flex: 1, padding: 20},
  title: {fontSize: 40},
  cell: {
    width: 70,
    height: 70,
    fontSize: 24,
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: 20,
    textAlign: 'center',
    paddingTop: 18,
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
});
