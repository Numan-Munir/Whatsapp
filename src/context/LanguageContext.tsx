import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import * as RNLocalize from 'react-native-localize';
import en from '../languages/en.json';
import {LanguageContextType, PropsWithChildren} from './languageContextType';

const DEFAULT_LANGUAGE = 'en';

type selectedLanguageProp = 'en' | 'zh-US';

const LanguageContext = React.createContext<LanguageContextType>(
  {} as LanguageContextType,
);

const languageObj = {
  en,
  'zh-US': zh,
};

export const useTranslation = () => useContext(LanguageContext);

export const LanguageContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  useEffect(() => {
    const currentLanguage = RNLocalize.findBestAvailableLanguage(
      Object.keys(languageObj),
    );

    setSelectedLanguage(currentLanguage?.languageTag || DEFAULT_LANGUAGE);
  }, []);

  const value = {
    ...languageObj[selectedLanguage as selectedLanguageProp],
    setLanguage: (language: string) => setSelectedLanguage(language),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
