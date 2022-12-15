import {Dimensions, Platform} from 'react-native';

const colors = {
  white: '#ffffff',
  black: '#000000',
  black10: '#867373',
  green: '#0CCC83',
  primery100: '#00A884',
  primery300: '#008069',
  red100: '#F16B6B',
  blue: '#0C42CC',
  red10: '#F8DADAC7',
  red300: '#DA1414',
};

const spacesFrom1 = Array.from({length: 64}, (_, i) => i + 1);
const spaces = [0.5, ...spacesFrom1];
const spacesMultiplier = spaces.map(space => space * 4);

const fontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

const fontSize = {
  title: 30,
  mediumTitle: 24,
  xmediumText: 18,
  smallTitle: 20,
  mediumText: 14,
  small: 13,
  xsmall: 12,
  text: 15,
  xText: 16,
};

const paddings = {
  top: spacesMultiplier[5],
  horizontal: spacesMultiplier[5],
};

const X_WIDTH = 375;
const X_HEIGHT = 812;
const SE_HEIGHT = 667;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const XII_WIDTH = 390;
const XII_HEIGHT = 844;
const XIII_WIDTH = 428;
const XIII_HEIGHT = 926;

const {height, width} = Dimensions.get('window');

const barHeight = () => {
  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
    if (width === X_WIDTH && height === X_HEIGHT) return 40;
    if (width === X_WIDTH && height === SE_HEIGHT) return 17;
    if (width === XSMAX_WIDTH && height === XSMAX_HEIGHT) return 41;
    if (width === XII_WIDTH && height === XII_HEIGHT) return 44;
    if (width === XIII_WIDTH && height === XIII_HEIGHT) return 44;
    return 20;
  }
  return 0;
};

const StatusBarHeight = Platform.select({
  ios: barHeight(),
  android: 0,
  default: 0,
});

const dimensions = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  statusBar: StatusBarHeight,
  bottomTabs: {
    height: 80,
    paddingBottom: spaces[5],
  },
  headerHeight: Platform.OS === 'ios' ? 64 : 50,
  artworkSummary: 140,
};

const animations = {
  bottomTabBar: {
    duration: 500,
  },
  discoverOverlay: {
    duration: 500,
  },
  discoverSwipe: {
    duration: 500,
  },
};

export const theme = {
  fontFamilies: {
    semibold: 'Roboto-Medium',
    text: 'Roboto-Regular',
    light: 'Roboto-Light',
    bold: 'Roboto-Bold',
    xbold: 'Roboto-Black',
  },
  colors: {
    text: colors.black,
    buttonBorders: colors.primery100,
    background: colors.white,
    error: colors.red100,
    ...colors,
  },
  space: spacesMultiplier,
  fontWeights,
  paddings,
  dimensions,
  animations,
  fontSize,
};
