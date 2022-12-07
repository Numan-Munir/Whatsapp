import {ReactNode} from 'react';

export type PropsWithChildren = {children?: ReactNode};

export type LanguageContextType = {
  common: {
    okay?: string;
    back?: string;
    cancel?: string;
    home?: string;
    choose?: string;
    change?: string;
    continue?: string;
    order?: string;
    settings?: string;
    backHome?: string;
    close?: string;
    liveAgent?: string;
    callMeNow?: string;
    somethingWentWrong?: string;
    weAreSorry?: string;
  };
  wellcomeScreen:{
    privacyPolicy?: string;
}

  setLanguage?: (value: string) => void;
};
