import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui'
import PrimaryButton from '../../components/PrimaryButton';
import { Alert } from 'react-native';
import { Spacer } from '../../components/Spacer';



const HeaderContainer = styled.SafeAreaView({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '21%'
  });

  const WellcomeImage = styled.Image({
    height: 250,
    width: 250
  });
  const Title = styled.Text({
    fontFamily: theme.fontFamilies.bold,
    fontSize: theme.fontSize.title
  });
  const Discreption = styled.Text({
    fontSize: theme.fontSize.small,
    textAlign: 'center',
    paddingHorizontal: 11
  });
  const CompanyName= styled.Text({
fontFamily: theme.fontFamilies.light,
fontSize: theme.fontSize.text,
color: theme.colors.black,
  });
  const FromText= styled.Text({
    fontFamily: theme.fontFamilies.light,
    fontSize: theme.fontSize.small,
    color: theme.colors.black10,
      });
  const BottomContainer = styled.View({
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 57
  });
  const CompanyContainer= styled.View({
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%'
  });
  const PrivacyBtn = styled.TouchableOpacity({
    
  })

const WellcomeScreen = () => {
  return (
    <>
    <HeaderContainer>
        <Title>Welcome to WhatsApp</Title>

        <Spacer.Column numberOfSpaces={10} />

        <WellcomeImage source={require('../../assets/images/wellcome_image.png')}/>
    </HeaderContainer>
    <BottomContainer>
    <Discreption>Read our Privacy Policy. Tap “Agree and continue” to 
                    accept the Teams of Service.
    </Discreption>
    <Spacer.Column numberOfSpaces={10} />
    <PrimaryButton/>

    <CompanyContainer>
      <FromText>from</FromText>
      <CompanyName>Facebook</CompanyName>
    </CompanyContainer>
    </BottomContainer>
    </>
  )
}

export default WellcomeScreen;
