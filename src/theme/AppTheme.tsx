import {
  ThemeProvider,
  createTheme,
  Palette,
  PaletteColorOptions,
  SimplePaletteColorOptions,
} from '@mui/material/styles';
import { ThemeOptions } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import palette, { CustomPaletteOptions } from './palette';
import typography from './typography';

interface AppThemeProps {
  children: ReactNode;
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1Roboto: React.CSSProperties;
    h2Roboto: React.CSSProperties;
    h3Roboto: React.CSSProperties;
    h4Roboto?: React.CSSProperties;
    subtitle1Roboto?: React.CSSProperties;
    subtitle2Roboto?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1Roboto?: React.CSSProperties;
    h2Roboto?: React.CSSProperties;
    h3Roboto?: React.CSSProperties;
    h4Roboto?: React.CSSProperties;
    subtitle1Roboto?: React.CSSProperties;
    subtitle2Roboto?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Roboto: true;
    h2Roboto: true;
    h3Roboto: true;
    h4Roboto: true;
    subtitle1Roboto: true;
    subtitle2Roboto: true;
  }
}

export type CustomThemeOptions = ThemeOptions & {
  palette: CustomPaletteOptions;
};

const theme: CustomThemeOptions = {
  typography,
  palette: palette as CustomPaletteOptions,
};

// "primary" | "secondary" | "error" ....
export type PaletteKey = keyof {
  [Key in keyof Palette as Palette[Key] extends PaletteColorOptions
    ? Key
    : never]: true;
};

export type PaletteColorKey = keyof SimplePaletteColorOptions;

export const appTheme = createTheme({
  ...theme,
}) as unknown as CustomThemeOptions;

export const AppTheme = (props: AppThemeProps): ReactElement => {
  const { children } = props;
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default AppTheme;
