//@ts-nocheck
import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    background: Record<BackgroundColors, string>;
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    grey: true;
    white: true;
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    tertiary: true;
    grey: true;
    white: true;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    background: Record<BackgroundColors, string>;
  }
}

export type BackgroundColors =
  | 'biege'
  | 'biegeLightSoft'
  | 'white'
  | 'green'
  | 'purpleLight'
  | 'purpleLightSoft'
  | 'grayLight'
  | 'redSoftLight'
  | 'iconHover';

export type CustomPaletteOptions = PaletteOptions & {
  background: Record<BackgroundColors, string>;
};

export const primary = {
  main: '#0975A5',
  dark: '#03567A',
  light: '#3689AD',
  white: '#fff',
  contrastText: '#E6F0F5',
  grey: '#A3AED0',
  p4: 'rgba(4, 107, 153, 0.04)',
  p8: 'rgba(4, 107, 153, 0.08)',
  p12: 'rgba(4, 107, 153, 0.12)',
  p30: 'rgba(4, 107, 153, 0.3)',
  p30Ripple:
    'radial-gradient(36.59% 100.8% at 50% 50%, rgba(4, 107, 153, 0.3) 99.54%, rgba(255, 255, 255, 0) 100%)',
  p50: 'rgba(4, 107, 153, 0.5)',
  50: '#F7F7F7',
  40: '#ACACAC',
  500: '#8B8B8B',
};

const background: Record<BackgroundColors, string> = {
  biege: '#FDF7ED',
  biegeLightSoft: '#f4f4f4',
  white: '#fff',
  green: '#EEFBEF',
  purpleLight: '#F3EEFE',
  purpleLightSoft: '#EAECF4',
  grayLight: '#F4F7FE',
  redSoftLight: '#FCF0F2',
  iconHover: '#727991',
};

const palette: CustomPaletteOptions = {
  text: {
    primary: 'rgba(13, 26, 44, 0.87)',
    secondary: '#A3AED0',
    disabled: 'rgba(13, 26, 44, 0.38)',
  },
  background,
  primary,
  secondary: {
    main: '#EC6708',
    dark: '#B95107',
    light: '#FF9B53',
    contrastText: '#fff',
    p4: 'rgba(236, 103, 8, 0.04)',
    p8: 'rgba(236, 103, 8, 0.08)',
    p12: 'rgba(236, 103, 8, 0.12)',
    p30: 'rgba(236, 103, 8, 0.3)',
    p30Ripple:
      'radial-gradient(36.59% 100.8% at 50% 50%, rgba(236, 103, 8, 0.3) 99.54%, rgba(255, 255, 255, 0) 100%)',
    p50: 'rgba(236, 103, 8, 0.5)',
  },
  tertiary: {
    main: '#397A8E',
    dark: '#275963',
    light: '#448EA7',
    contrastText: '#fff',
  },
  error: {
    main: '#CC2500',
    secondary: 'rgba(204, 37, 0, 0.2)',
    dark: '#8F1A00',
    light: '#FFE2E2',
    contrastText: '#fff',
    p4: 'rgba(204, 37, 0, 0.04)',
    p8: 'rgba(236, 103, 8, 0.08)',
    p12: 'rgba(204, 37, 0, 0.12)',
    p30: 'rgba(204, 37, 0, 0.3)',
    p30Ripple:
      'radial-gradient(36.59% 100.8% at 50% 50%, rgba(204, 37, 0, 0.3) 99.54%, rgba(255, 255, 255, 0) 100%)',
    p50: 'rgba(236, 103, 8, 0.5)',
    p160: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #CC2500',
    p190: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #CC2500',
  },
  success: {
    main: '#507358',
    secondary: '#B2C8B6',
    dark: '#00684F',
    light: 'rgb(0, 204, 155)',
    contrastText: '#fff',
  },
  info: {
    main: '#006ACC',
    dark: '#004A8F',
    light: '#A3D3FF',
    contrastText: '#fff',
  },
  warning: {
    main: '#E28C42',
    dark: '#CB6F20',
    light: '#F2A665',
  },
  grey: {
    1: '#333333',
    6: '#F2F2F2',
    main: '#DADEE6',
    dark: '#046B99',
    light: '#3689AD',
    contrastText: '#fff',
    greyBlue60: '#6B7A99',
    greyBlue85: '#C3CAD9',
    greyBlue90: '#DADEE6',
    greyBlue95: '#EDEFF2',
    greyBlue97: '#F5F6F7',
  },
  white: {
    main: '#fff',
    dark: '#0673A3',
    light: '#fff',
    contrastText: '#b0b7c3',
  },
};

export default palette;
